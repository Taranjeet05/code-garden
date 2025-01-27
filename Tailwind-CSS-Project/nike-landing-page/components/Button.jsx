import Image from "next/image"

const Button = ({label, iconURl}) => {
  return (
    <button>
      {label}
      <Image 
      src={iconURl}
      alt="Arrow Right icon"
      width={50}
      height={50}
      className="ml-2 rounded-full"
      />
    </button>
  )
}

export default Button