const Button=(props)=> {
    const {children="Default",variant="bg-green-500",onClick=()=>{},type}=props;
    return (
      <button 
        className={`h-10 px-6 font-semibold ${variant} text-white`} 
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }

  export default Button;