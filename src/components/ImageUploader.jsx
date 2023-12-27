import { useState } from "react";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import "./ImageUploader.css";


export default function ImageUploader({ setPublicIds, setLoading, publicIds }) {
    const [cloudName] = useState(import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
    const [uploadPreset] = useState(import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    const [uwConfig] = useState({
        cloudName,
        uploadPreset,
        sources: ["local", "url"], // restrict the upload sources to URL and local files
        clientAllowedFormats: ["images"], //only allow image uploads
        maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        // folder: "user_images", //upload files to the specified folder
    });

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
        cloud: {
            cloudName
        }
    });

    ImageUploader.defaultProps = {
        publicIds: [],
    };

    return (
        <div className="image-uploader">
            <h3>Add Property Images</h3>
            <CloudinaryUploadWidget
                uwConfig={uwConfig}
                setPublicIds={setPublicIds}
                setLoading={setLoading}
                publicIds={publicIds}
            />
            <p>{publicIds.length} Images Uploaded</p>
            {publicIds.map(publicId => {
                const img = cld.image(publicId);
                console.log(img);
                return (
                    <AdvancedImage
                        key={publicId}
                        style={{ maxWidth: "15%" }}
                        cldImg={img}
                        plugins={[responsive(), placeholder()]}
                    />
                );
            })}
        </div>
    );
}
