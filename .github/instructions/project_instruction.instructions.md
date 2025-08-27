# Zustand Cart Store Pattern (with Devtools)

**File:** `src/store/cart/index.ts`

Use this pattern for a robust, single-object cart store with devtools integration:

```typescript
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCart } from "@/apis/cart/getCart";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ICart {
  cartId: string;
  userId: string;
  items: CartItem[];
}

interface CartState {
  cart: ICart | null;
  setCartItems: (cartObj: ICart) => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  fetchCart: (userId: string) => Promise<void>;
}

export const useCartStore = create<CartState>()(
  devtools((set) => ({
    cart: null,
    setCartItems: (cartObj) => set({ cart: cartObj }),
    addItem: (item) =>
      set((state) => {
        if (!state.cart) return state;
        const exists = state.cart.items.find((i) => i.id === item.id);
        let newItems;
        if (exists) {
          newItems = state.cart.items.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          );
        } else {
          newItems = [...state.cart.items, item];
        }
        return { cart: { ...state.cart, items: newItems } };
      }),
    removeItem: (id) =>
      set((state) => ({
        cart: state.cart
          ? {
              ...state.cart,
              items: state.cart.items.filter((i) => i.id !== id),
            }
          : null,
      })),
    updateQuantity: (id: string, quantity: number) =>
      set((state) => ({
        cart: state.cart
          ? {
              ...state.cart,
              items: state.cart.items.map((i) =>
                i.id === id ? { ...i, quantity } : i
              ),
            }
          : null,
      })),
    clearCart: () => set({ cart: null }),
    fetchCart: async (userId: string) => {
      const cart = await getCart(userId);
      set({ cart });
    },
  }))
);
```

**Notes:**

- Always return the full `cart` object when updating items.
- Initialize `cart` as `null` and check for it before updating.
- Use Zustand devtools for debugging state changes.

---

## applyTo: "\*\*"

Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.# Project Instructions for GitHub Copilot

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

## CheckBox Component

Reusable checkbox component nằm ở `src/components/CheckBox/index.tsx`. Hỗ trợ render danh sách các checkbox với trạng thái checked, disabled, label, và callback khi thay đổi.

**Props:**

- `menuCheckBox`: { items: Array<{ value?: string; isDisabled?: boolean; isChecked?: boolean; label?: string; className?: string; defaultValue?: string; onChange?: (checked: boolean) => void }> }

**Cách hoạt động:**

- Quản lý trạng thái checked cho từng checkbox bằng `useState`.
- Khi người dùng thay đổi trạng thái, callback `onChange` (nếu có) sẽ được gọi với giá trị mới.

**Ví dụ sử dụng:**

```tsx
<CheckBox
  menuCheckBox={{
    items: [
      { label: "Option 1", value: "1", isChecked: true },
      { label: "Option 2", value: "2", isDisabled: true },
      { label: "Option 3", value: "3" },
    ],
  }}
/>
```

**Tuỳ chỉnh:**

- Có thể truyền className cho từng item để tuỳ chỉnh style.
- Hỗ trợ accessibility qua label và id cho từng checkbox.

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

## Card Component Documentation

### Description

The `Card` component displays product information including image, title, price, old price, rating, discount badge, and interactive icons (Favorite, Search, Cart).

### Props

- `IMG?: string` — Product image URL.
- `title?: string` — Product name.
- `price?: string` — Current price.
- `oldPrice?: string` — Old price (optional, will show as strikethrough).
- `rating?: number` — Number of filled stars (0–5).
- `discount?: string` — Discount badge text (e.g. "80%").

### Features

- Shows product image and details.
- Displays rating as filled and empty stars.
- Shows discount badge at top-left.
- Favorite icon always visible; Search and Cart icons animate in on hover.
- Responsive and accessible (uses `alt` for images, `aria-label` for icons).
- Uses Tailwind CSS for layout and transitions.

### Usage Example

```tsx
import Card from "./components/Card";

<Card
  IMG="https://via.placeholder.com/200x200?text=Product"
  title="Shake & Spin Lion"
  price="750.000₫"
  oldPrice="4.500.000₫"
  rating={4}
  discount="80%"
/>;
```

### Notes

- Default values are provided for all props.
- Animation for Search and Cart icons uses Tailwind CSS transitions.
- You can customize icons and styles via props or override

## Select Component Documentation

### Description

The `Select` component is a reusable dropdown/select input supporting labels, options, placeholders, accessibility, and custom styling.

### Props

- `label?: string` — Optional. Label displayed before the select.
- `options?: Array<{ value: string; label: string }>` — Optional. List of options to render.
- `placeholder?: string` — Optional. Placeholder option shown at the top.
- All standard HTML select props (e.g. `value`, `onChange`, `disabled`, `className`, `name`, `id`, etc.)

### Features

- Renders a select dropdown with options.
- Supports all standard select attributes via props.
- Forwards `ref` for integration with forms and libraries.
- Accessible: uses `label` and `id` for screen readers.
- Customizable via `className` and Tailwind CSS.

### Usage Example

```tsx
import Select from "./components/Select";

<Select
  label="Category"
  options={[
    { value: "toys", label: "Toys" },
    { value: "books", label: "Books" },
    { value: "clothes", label: "Clothes" },
  ]}
  placeholder="Choose category"
  value={selectedCategory}
  onChange={handleChange}
  id="category"
/>;
```

### Notes

- Always provide a unique `id` when using `label` for accessibility.
- If `placeholder` is set, it will be rendered as a disabled option at the top.
- You can style the select using Tailwind CSS or custom classes.
- Supports forwarding refs

## TextField Component Documentation

### Description

The `TextField` component is a reusable input field supporting multiple variants, labels, accessibility, and custom styling.

### Props

- `variant?: "outlined" | "filled" | "standard"` — Optional. Controls the visual style of the input (default: `"outlined"`).
- `label?: string` — Optional. Label displayed before the input.
- All standard HTML input props (e.g. `type`, `value`, `onChange`, `placeholder`, `disabled`, `className`, `name`, `id`, etc.)

### Features

- Supports all standard input attributes via props.
- Forwards `ref` for integration with forms and libraries.
- Accessible: uses `label` and `id` for screen readers.
- Customizable via `className` and Tailwind CSS.
- Variant prop applies different styles (`outlined`, `filled`, `standard`).

### Usage Example

```tsx
import TextField from "./components/TextField";

<TextField
  type="text"
  label="Full Name"
  placeholder="Enter your name"
  value={name}
  onChange={handleChange}
  variant="outlined"
  className="mb-4"
  id="fullName"
/>;
```

### Notes

- Always provide a unique `id` when using `label` for accessibility.
- You can style the input using Tailwind CSS or custom classes.
- Supports forwarding refs for advanced use cases.
- Add custom CSS classes for each variant (`textfield-outlined`, `textfield-filled`, `textfield-standard`).

## InputAnimation Component Documentation

### Description

The `InputAnimation` component renders an input field with an animated placeholder that types out each letter one-by-one and cycles through multiple placeholder texts.

### Props

- `placeholders: string[]` — Required. Array of placeholder strings to cycle through.
- `animationSpeed?: number` — Optional. Milliseconds per letter for typing animation (default: `40`).
- `intervalTime?: number` — Optional. Milliseconds between changing placeholder texts (default: `3000`).

### Features

- Animated placeholder: each letter appears one-by-one for a typing effect.
- Cycles through multiple placeholder texts at a set interval.
- Customizable animation speed and interval.
- Styled for use in forms and footers (uses Tailwind CSS).

### Usage Example

```tsx
import InputAnimation from "./components/InputAnimation";

<InputAnimation
  placeholders={["Nhập địa chỉ email của bạn...", "Bạn cần tư vấn?"]}
  animationSpeed={50}
  intervalTime={4000}
/>;
```

### Notes

- The input uses a fixed `id="footer-email"`; update if you need a unique id for accessibility.
- You can style the input further using Tailwind CSS or custom classes.
- This component is ideal for newsletter forms or places where engaging placeholder text

## Carousel Component Documentation

### Description

The `Carousel` component displays a set of items (such as images or custom content) in a sliding or fading carousel format. It supports autoplay, infinite looping, navigation dots, and custom styling.

### Props

- `children: React.ReactNode` — Required. Carousel items (e.g. images, cards, etc.).
- `showDot?: boolean` — Optional. Show navigation dots below the carousel (default: `true`).
- `autoPlaySpeed?: number` — Optional. Time in ms between auto slide transitions (default: `3000`).
- `transitionDuration?: number` — Optional. Duration in ms for slide/fade transition (default: `300`).
- `itemClass?: string` — Optional. Custom class for each carousel item.
- `containerClass?: string` — Optional. Custom class for the carousel container.
- `dotClass?: string` — Optional. Custom class for navigation dots.
- `infinite?: boolean` — Optional. Enable infinite looping (default: `true`).

### Features

- Autoplay with configurable speed.
- Infinite looping of items.
- Navigation dots for manual selection.
- Smooth fade transition between items.
- Responsive width and fixed height support via Tailwind CSS.
- Customizable via className props.

### Usage Example

```tsx
import Carousel from "./components/Carousel";
import Img1 from "@/assets/slider1.jpg";
import Img2 from "@/assets/slider2.jpg";
import Img3 from "@/assets/slider3.jpg";

<Carousel
  showDot={true}
  autoPlaySpeed={3000}
  transitionDuration={400}
  containerClass="w-4/5 h-[400px] mx-auto"
  itemClass="rounded-lg"
  infinite={true}
>
  <img src={Img1} alt="Slide 1" className="w-full h-full object-cover" />
  <img src={Img2} alt="Slide 2" className="w-full h-full object-cover" />
  <img src={Img3} alt="Slide 3" className="w-full h-full object-cover" />
</Carousel>;
```

### Notes

- To ensure all items have the same size, set a fixed height for the container and use `w-full h-full object-cover` for images.
- You can pass any React node as a child (not just images).
- Dots are keyboard accessible and support custom styling.
- Use Tailwind CSS or your own classes for further customization.

## ModalRoot & Authentication Modal Documentation

### ModalRoot

- `ModalRoot` is a global modal manager component (`src/components/ModalRoot/index.tsx`).
- It listens to the Zustand modal store (`src/store/modalStore.ts`) and renders the correct modal component based on the current modal state.
- Place `<ModalRoot />` at the root of your app (e.g., in `App.tsx` or your main layout) so it can render modals globally.
- To show a modal, call `useModalStore.getState().showModal('authentication', { ...props })` from anywhere in your app.
- Register modal components in `MODAL_COMPONENTS` inside `ModalRoot` for dynamic rendering.

### Authentication Modal

- The `Authentication` component (`src/components/ModalRoot/Authentication/index.tsx`) manages three authentication views: Login, Register, and Forgot.
- It uses local state (`active`) to switch between these views.
- The overlay and centering are handled by `ModalRoot`; `Authentication` only renders the modal content.
- The close button calls the `onClose` prop, which hides the modal via the modal store.

### Login, Register, Forgot Modals

- `LoginModal`, `RegisterModal`, and `ForgotModal` are child components of `Authentication`.
- Each receives `onClose` and navigation callbacks (`onSwitchToLogin`, `onSwitchToRegister`, `onSwitchToForgot`) from `Authentication`.
- Use these callbacks to switch between authentication views by updating the `active` state in `Authentication`.

### Usage Example

```tsx
// Show the authentication modal from anywhere in your app:
import { useModalStore } from "@/store/modalStore";

const handleLoginClick = () => {
  useModalStore.getState().showModal("authentication");
};

// In your main layout or App.tsx:
<ModalRoot />;
```

### Notes

- Only one modal is shown at a time.
- Pass additional props to modals via the second argument of `showModal`.
- All modal content should be rendered inside the modal component; do not duplicate

## TimeCountDown Component

**Description:**
`TimeCountDown` is a React component that displays a live countdown timer for a promotional event or flash sale.

**Props:**

- `startDay` (string, optional): Start date in `DD/MM/YYYY` format.
- `startTime` (string, optional): Start time in `HH:mm:ss` format.
- `endDay` (string, optional): End date in `DD/MM/YYYY` format.
- `endTime` (string, optional): End time in `HH:mm:ss` format.

**Features:**

- Parses start and end date/time.
- Shows status: "Chưa bắt đầu" (not started), "Đã kết thúc" (ended), or a live countdown.
- Updates every second.
- Accessible: uses `aria-label`, `aria-live`, and `role="timer"`.

**Usage Example:**

```tsx
<TimeCountDown
  startDay="26/08/2025"
  startTime="20:00:00"
  endDay="29/08/2025"
  endTime="23:59:00"
/>
```

---

## MainProductRight Component

**Description:**
`MainProductRight` displays product details, including price, rating, color/size options, quantity selector, vouchers, and a flash sale section.

**Integration with TimeCountDown:**

- If the product has a `flashSale` object, it renders a banner and the `TimeCountDown` component to show the countdown for the sale.

**Usage Example:**

```tsx
{
  product.flashSale && (
    <div className="flex items-center bg-gradient-to-l from-[#DD1829] to-[#FCC419] p-2 rounded-lg">
      <img
        title="Flash Sale"
        src={product.flashSale.image}
        alt="Flash Sale"
        className="w-30 h-8"
      />
      <TimeCountDown
        startDay={product.flashSale.startDay}
        startTime={product.flashSale.startTime}
        endDay={product.flashSale.endDay}
        endTime={product.flashSale.endTime}
      />
    </div>
  );
}
```

**Note:**

- `TimeCountDown` will automatically handle the countdown logic and display the correct status or time remaining.
- All props are optional; defaults are provided for demonstration.

---

# Project Copilot Instructions

- The main developer role for this project is **Senior Frontend Developer**.
- All code, documentation, and solutions should follow best practices for modern frontend development (React, Redux Toolkit, TypeScript, RESTful API integration, scalable architecture, maintainable code, and clear separation of concerns).
- When generating code, always optimize for readability, reusability, and performance.
- Use advanced patterns and utilities where appropriate, and ensure all API calls, state management, and UI logic are robust and production-ready.

## Axios Instance Documentation

### Description

The project uses an advanced Axios instance for all API requests, located at `src/apis/axiosInstance.ts`. It is designed for scalability, error handling, and integration with global state (Zustand).

### Features

- **Singleton pattern**: Only one Axios instance is used throughout the app.
- **Automatic retry**: Network errors are retried up to 2 times using `axios-retry`.
- **Request/response interceptors**:
  - Attach authentication tokens automatically.
  - Support token refresh logic for 401 errors.
  - Global loading/error state integration (Zustand-ready, see `useGlobalStore`).
  - Custom error formatting for UI-friendly messages.
  - Logging in development mode for requests, responses, and errors.
- **Dynamic baseURL**: Can be set per request.
- **Request cancellation**: Supports `signal` for aborting requests.
- **File upload/download helpers**: Built-in methods for uploading and downloading files.

### Usage Example

```tsx
import api from "@/apis/axiosInstance";

// Simple GET
api.get("/products").then((res) => console.log(res.data));

// POST with auth token
api.post("/cart", { productId: 1 }, { authToken: "your_token" });

// File upload
api.upload("/upload", file, { authToken: "your_token" });

// Request cancellation
const controller = new AbortController();
api.get("/products", { signal: controller.signal });
controller.abort(); // Cancel request
```

### Error Handling

All errors are formatted for UI consumption:

```js
{
  status: number,
  message: string, // Robust extraction from API response
  data: any,
  config: Axios config
}
```

### Global State Integration

- To show loading/error globally, use Zustand store (`useGlobalStore`).
- Example (in interceptors):
  ```js
  useGlobalStore.getState().setLoading(true / false);
  useGlobalStore.getState().setError(error);
  ```

### File Location

- Main instance: `src/apis/axiosInstance.ts`
- Import as: `import api from '@/apis/axiosInstance'`

---
