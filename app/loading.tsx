import CommonLoader from "./components/commonLoader";

const Loading = () => {
  return (
    <CommonLoader 
      imageAlt="Cargando contenido"
      imageHeight={35}
      imageWidth={35}
      imageSrc="/loading-glass.png"
      label="...cargando contenido"
    />
  )
};

export default Loading;