import Image from "next/image";

interface Props {
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageSrc: string;
  label: string;
}
const CommonLoader = (props: Props) => {
  return (
    <div className="loading-screen">
      <Image 
        alt={props.imageAlt} 
        width={props.imageWidth} 
        height={props.imageHeight} 
        src={props.imageSrc}
      />
      <h4>{props.label}</h4>
    </div>
  )
};

export default CommonLoader;