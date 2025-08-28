import React, { useEffect, useState } from "react";
import axios from "axios";

const AddressSelect: React.FC<{
  onAddressChange: (city: string, district: string, ward: string) => void;
}> = ({ onAddressChange }) => {
  const [cities, setCities] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
      )
      .then((res) => setCities(res.data));
  }, []);

  useEffect(() => {
    if (selectedCity) {
      const city = cities.find((c) => c.Id === selectedCity);
      setDistricts(city ? city.Districts : []);
      setSelectedDistrict("");
      setWards([]);
      setSelectedWard("");
    }
  }, [selectedCity, cities]);

  useEffect(() => {
    if (selectedDistrict) {
      const district = districts.find((d) => d.Id === selectedDistrict);
      setWards(district ? district.Wards : []);
      setSelectedWard("");
    }
  }, [selectedDistrict, districts]);

  useEffect(() => {
    onAddressChange(selectedCity, selectedDistrict, selectedWard);
  }, [selectedCity, selectedDistrict, selectedWard, onAddressChange]);

  return (
    <div className="space-y-3">
      <select
        className="w-full border rounded px-3 py-2"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        <option>---</option>
        {cities.map((city) => (
          <option key={city.Id} value={city.Id}>
            {city.Name}
          </option>
        ))}
      </select>

      <select
        className={`w-full border rounded px-3 py-2 ${
          !selectedCity ? "opacity-50" : ""
        }`}
        value={selectedDistrict}
        onChange={(e) => setSelectedDistrict(e.target.value)}
        disabled={!selectedCity}
      >
        <option>Chọn quận huyện</option>
        {districts.map((district) => (
          <option key={district.Id} value={district.Id}>
            {district.Name}
          </option>
        ))}
      </select>

      <select
        className={`w-full border rounded px-3 py-2 ${
          !selectedDistrict ? "opacity-50" : ""
        }`}
        value={selectedWard}
        onChange={(e) => setSelectedWard(e.target.value)}
        disabled={!selectedDistrict}
      >
        <option value="">Chọn phường xã</option>
        {wards.map((ward) => (
          <option key={ward.Id} value={ward.Id}>
            {ward.Name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default AddressSelect;
