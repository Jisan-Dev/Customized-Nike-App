const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullwidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 border rounded-full font-montserrat leading-none
    ${
      backgroundColor
        ? `${backgroundColor}${borderColor} ${textColor}`
        : 'bg-coral-red text-white border-coral-red group'
    }
    px-7 py-4 ${fullwidth && 'w-full'} `}>
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5 group-hover:translate-x-2 transition-all duration-300"
        />
      )}
    </button>
  );
};

export default Button;
