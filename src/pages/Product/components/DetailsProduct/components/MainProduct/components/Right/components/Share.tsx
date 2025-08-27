import { useState, useCallback, useEffect } from "react";
import ShareIcon from "@mui/icons-material/Share";
import Facebook from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SHARE_URL = "https://f1genz-babie.mysapo.net/roller-blocks-rockin-wagon";

const Share = () => {
  const [isSharePopupOpen, setSharePopupOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      {isSharePopupOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/10 z-100"
          onClick={() => setSharePopupOpen(false)}
          tabIndex={-1}
          aria-label="Đóng chia sẻ"
        />
      )}
      {/* Nút share và popup */}
      <div className="relative z-100">
        {/* Share button */}
        <div className="flex flex-row-reverse">
          <button
            type="button"
            className="bg-red-500 rounded-full p-3 shadow-lg flex items-center justify-center h-max"
            title="Chia sẻ"
            aria-label="Chia sẻ"
            onClick={() => setSharePopupOpen((open) => !open)}
          >
            <ShareIcon style={{ color: "#fff" }} />
          </button>
          {isSharePopupOpen && (
            <div className="absolute right-15 top-[-30px] bg-white rounded-lg shadow-xl w-[340px] p-4 z-50">
              <div className="flex items-center justify-between mb-2">
                <label className="font-semibold text-lg">Chia sẻ</label>
                <div className="flex gap-2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    href={`https://www.facebook.com/sharer.php?u=${SHARE_URL}`}
                    className="text-blue-600"
                  >
                    <Facebook />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    href={`https://twitter.com/intent/tweet?url=${SHARE_URL}`}
                    className="text-blue-400"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    href={`https://wa.me/?text=${SHARE_URL}`}
                    className="text-green-500"
                  >
                    <PhoneIcon />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin"
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${SHARE_URL}`}
                    className="text-blue-700"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
              <hr />
              <div className="mt-3">
                <label className="block mb-2 font-medium">
                  Sao chép đường dẫn
                </label>
                <div className="flex items-center gap-2">
                  <input
                    value={SHARE_URL}
                    readOnly
                    id="main-product-share-copy"
                    className="border rounded px-2 py-1 flex-1"
                  />
                  <button
                    type="button"
                    title="Sao chép"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Sao chép
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Share;
