import React from "react";

interface ButtonProps {
  label: any
  color: 'grey' | 'black' | 'yellow'
  onClick: () => void
  big?: boolean
  operating?: boolean
}

const CustomButton: React.FC<ButtonProps> = ({ label, onClick, color, big }) => {

  const buttonWidth = big ? 125 : 55

  const getColor = (color: string) => {    //Gets the color for the button
    if (color == 'grey') return '#A08B8D'
    if (color == 'black') return '#292827'
    if (color == 'yellow') return '#ECC82B'
  }

  return (
    <button
      onClick={onClick}
      onMouseDown={(e) => e.currentTarget.focus()}  //Focus the button when pressed in PC screens
      onMouseUp={(e) => e.currentTarget.blur()}     //Unfocus the button when released in PC screens
      onTouchStart={(e) => e.currentTarget.focus()}  //Focus the button when pressed in touch screens
      onTouchEnd={(e) => e.currentTarget.blur()}    //Unfocus the button when released in touch screens
      style={{
        borderRadius: 100,
        backgroundColor: getColor(color),
        width: buttonWidth,
        ...(big && { gridColumn: "1 / 3" }),
        height: 55
      }}>
      <p style={{ color: '#ffffff' }}>{label}</p>
    </button>
  )

}
export default CustomButton;

