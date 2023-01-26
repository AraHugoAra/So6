import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import cancel from "../../src/assets/icons/cancel.png"


export default function UploadWidget({label, description, imageUploaded, setImageUploaded}) {
  const [thumbnail, setThumbnail] = useState(null)
  const cloudinaryRef = useRef()
  const widgetRef = useRef()

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: import.meta.env.VITE_CLOUDINARY_NAME,
      uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
      // cropping: true, //ajoute une étape "rogner"
      // croppingCoordinatesMode: 'custom',
      // showSkipCropButton: false,
      // croppingAspectRatio: 1,
      // croppingShowBackButton: true,
      // showAdvancedOptions: true,  //affiche les options avancées (public_id et tag)
      // sources: [ "local", "url"], // restreint l'upload aux sources locales et URL
      multiple: false,  //restreint à un unpload unique (vs multiple)
      folder: "user_images", //choisit un dossier d'upload
      // tags: ["users", "profile"], //ajoute les tags à l'upload (pour chercher dans la media bay)
      // context: {alt: "user_uploaded"}, //ajoute un contexte à l'upload
      clientAllowedFormats: ["jpg", "jpeg", "png", "bmp"], //Array de formats acceptés
      maxImageFileSize: 1000000,  //Taille maximale de l'upload (1MB)
      maxImageWidth: 600, //Réduit la largeur de l'image à 600px à l'upload
      // theme: "purple", //choisit un thème
    }, function(error, result) {
      if(result.event === "success") {
        setThumbnail(result.info.thumbnail_url)
        setImageUploaded(result.info.url)
      }
      if(error) console.log('Upload Image error: ', error)
    })
  }, [])

  function handleChangeImage() {
    // e.preventDefault()
    setImageUploaded(null)
    // widgetRef.current.open()
  }

  return (
    !imageUploaded ? (
      <button onClick={() => widgetRef.current.open()}>
        {label}
      </button>
    ) : (
      <>
        <p style={{textAlign: "left"}}>{description}</p>
        <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", marginTop: "7px"}}>
          <img src={thumbnail} /* width="80px" */ />
          <img src={cancel} onClick={handleChangeImage} width="15px" height="15px" />
        </div>
      </>
    )
  )
}