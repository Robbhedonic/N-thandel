// frontend/src/components/QuantityInput.tsx



import  { useState, useEffect } from 'react';

interface QuantityInputProps {
  initialValue: number;
  onChange: (value: number) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({ initialValue, onChange }) => {
  const [quantity, setQuantity] = useState<number>(initialValue);

  // Sincroniza el valor inicial cuando cambia
  useEffect(() => {
    setQuantity(initialValue);
  }, [initialValue]);

  const handleIncrement = () => {
    setQuantity((prev) => {
      const newValue = prev + 1;
      onChange(newValue);
      return newValue;
    });
  };

  const handleDecrement = () => {
    setQuantity((prev) => {
      const newValue = prev > 0 ? prev - 1 : 0;
      onChange(newValue);
      return newValue;
    });
  };

  return (
    <div className="quantity-part">
      <div>
        <button className="quatity-button" onClick={handleDecrement}>
          -
        </button>
      </div>
      <div>
        <span className='quatity-number'>{quantity}</span>
      </div>
      <div>
        <button className="quatity-button" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityInput;
