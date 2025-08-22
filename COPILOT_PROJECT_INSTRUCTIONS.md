# Project Instructions for GitHub Copilot

## Overview

This is a modern e-commerce store client built with React, TypeScript, and Vite. It uses Tailwind CSS for styling, Zustand for state management, and React Router for navigation. Zustand is used for global state management, providing a simple and scalable way to manage application state across components. The project is modular, with layouts, pages, components, hooks, and services.

## Tech Stack

- React 19
- TypeScript 5
- Vite
- Tailwind CSS
- Zustand (for global state management)
- ESLint
- MUI (Material UI)
- Swiper

## Structure

- `src/` — main source code
  - `layouts/` — layout components
  - `pages/` — page components
  - `components/` — reusable UI components
  - `router/` — routing setup
  - `assets/` — images and static assets
  - `hooks/`, `services/`, `store/`, `types/`, `utils/` — utilities and logic
- `public/` — static files
- `index.html` — entry point
- `tsconfig.app.json` — TypeScript config with path aliasing
- `vite.config.ts` — Vite config
- `.gitignore` — files to ignore in Git

## Path Mapping

- Imports using `@/` map to `src/` (see `tsconfig.app.json`).

## Setup Instructions

1. Install dependencies:
   ```sh
   yarn install
   ```
2. Start development server:
   ```sh
   yarn dev
   ```
3. Build for production:
   ```sh
   yarn build
   ```
4. Lint code:
   ```sh
   yarn lint
   ```
5. Preview production build:
   ```sh
   yarn preview
   ```

## ESLint

- Type-aware linting is enabled.
- See `eslint.config.js` and README for advanced configuration.

## Notes

- Do not add or push files to the `.git` folder. Use `.gitignore` to exclude files from version control.
- Use path aliases for clean imports.
- All main logic is in the `src/` folder.

## Modal Management (Zustand + ModalRoot)

Global modals are managed using Zustand and the `ModalRoot` component.
The Zustand store (`src/store/modalStore.ts`) tracks which modal is open and its props.
The `ModalRoot` component (`src/components/ModalRoot/index.tsx`) listens to the store and renders the appropriate modal (e.g., Login modal).
To show a modal, dispatch `useModalStore.getState().showModal('login', { ...props })` from anywhere in your app.
Place `<ModalRoot />` at the root of your app (e.g., in `App.tsx` or your main layout) so it can render modals globally.
Register your modal components in `ModalRoot` for dynamic rendering.

## Button Component

Reusable button component is located at `src/components/Button/index.tsx`.
It supports variants, colors, sizes, icons, and custom classes using Tailwind CSS and `clsx`.

**Props:**

- `variant`: `'solid' | 'outline' | 'ghost'` (default: `'solid'`)
- `color`: `'primary' | 'secondary' | 'danger'` (default: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `disabled`: `boolean`
- `startIcon`, `endIcon`: `React.ReactNode` (icon before/after text)
- `children`: `React.ReactNode` (button content)
- `className`: `string` (custom classes)
- `onClick`: `() => void` (required)

**Usage Example:**

```tsx
<Button
  variant="solid"
  color="primary"
  size="md"
  startIcon={<Icon />}
  endIcon={<Icon />}
  onClick={() => {
    /* handle click */
  }}
>
  Click Me
</Button>
```

## DropDown Component

Reusable dropdown component nằm ở `src/components/DropDown/index.tsx`. Hỗ trợ các trigger (cách mở menu) như `hover`, `click`, `contextMenu` và vị trí hiển thị menu qua prop `placement`.

**Props:**

- `children`: React.ReactNode (nội dung nút dropdown)
- `menu`: { items: { label: string | ReactNode; key: string; isDisable?: boolean }[] }
- `trigger`: `'hover' | 'click' | 'contextMenu'` (default: `'hover'`)
- `placement`: `'top' | 'bottom' | 'left' | 'right'` (default: `'bottom'`)

**Cách hoạt động:**

- Khi trigger là `hover`, menu sẽ hiện khi di chuột vào nút.
- Khi trigger là `click`, menu sẽ hiện khi click vào nút.
- Khi trigger là `contextMenu`, menu sẽ hiện khi nhấn chuột phải vào nút.

**Ví dụ sử dụng:**

```tsx
<DropDown
  trigger="click"
  placement="bottom"
  menu={{
    items: [
      { label: "Profile", key: "profile" },
      { label: "Logout", key: "logout" },
    ],
  }}
>
  <span>User</span>
</DropDown>
```

**Tuỳ chỉnh:**

- Có thể truyền ReactNode cho label để custom giao diện item.
- Sử dụng className để tuỳ chỉnh style cho menu hoặc nút.
