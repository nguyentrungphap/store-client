import React, { useEffect, useState, useMemo } from "react";

type Props = {
  startDay?: string; // "26/08/2025"
  startTime?: string; // "20:00:00"
  endDay?: string; // "27/08/2025"
  endTime?: string; // "23:59:00"
};

function parseDate(day?: string, time?: string) {
  if (!day || !time) return new Date(NaN);
  const [d, m, y] = day.split("/");
  return new Date(`${y}-${m}-${d} ${time}`);
}

function getTimeLeft(endTime: number) {
  const now = Date.now();
  const distance = endTime - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);
  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

const TimeCountDown: React.FC<Props> = ({
  startDay = "26/08/2025",
  startTime = "20:00:00",
  endDay = "29/08/2025",
  endTime = "23:59:00",
}) => {
  const startTimestamp = useMemo(
    () => parseDate(startDay, startTime).getTime(),
    [startDay, startTime]
  );
  const endTimestamp = useMemo(
    () => parseDate(endDay, endTime).getTime(),
    [endDay, endTime]
  );

  const [status, setStatus] = useState<"waiting" | "running" | "ended">(
    "waiting"
  );
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(endTimestamp));

  useEffect(() => {
    if (isNaN(startTimestamp) || isNaN(endTimestamp)) {
      setStatus("ended");
      return;
    }

    function updateCountdown() {
      const now = Date.now();
      if (now < startTimestamp) {
        setStatus("waiting");
        return;
      }
      if (now >= endTimestamp) {
        setStatus("ended");
        return;
      }
      setStatus("running");
      setTimeLeft(getTimeLeft(endTimestamp));
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [startTimestamp, endTimestamp]);

  if (status === "waiting")
    return <div className="text-yellow-600 font-semibold">Chưa bắt đầu</div>;
  if (status === "ended")
    return <div className="text-gray-500 font-semibold">Đã kết thúc</div>;

  return (
    <div className="flex gap-3 pl-3">
      <label>Bắt đầu sau</label>
      <div
        className="flex items-center gap-2"
        aria-label="Đếm ngược khuyến mãi"
        aria-live="polite"
        role="timer"
      >
        {timeLeft.days !== "00" && (
          <span className="flex gap-2">
            <b>{timeLeft.days}</b>
            <strong>Ngày</strong>
          </span>
        )}
        <span className="flex gap-2">
          <b>{timeLeft.hours}</b>
          <strong>Giờ</strong>
        </span>
        <span className="flex gap-2">
          <b>{timeLeft.minutes}</b>
          <strong>Phút</strong>
        </span>
        <span className="flex gap-2">
          <b>{timeLeft.seconds}</b>
          <strong>Giây</strong>
        </span>
      </div>
    </div>
  );
};

export default TimeCountDown;
