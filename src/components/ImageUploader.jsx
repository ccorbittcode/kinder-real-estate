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

    const handleDelete = async (id) => {
        // Call your server-side code to delete the image from Cloudinary
        try {
            const response = await fetch(`http://localhost:5000/delete-image/${id}`, { method: 'DELETE' });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.success) {
                setPublicIds((prevIds) => prevIds.filter((prevId) => prevId !== id));
            } else {
                console.error(data);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const handleClick = (event, id) => {
        event.preventDefault();
        handleDelete(id);
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
                return (
                    <div key={publicId} style={{ display: 'inline-block' }}>
                        <AdvancedImage
                            style={{
                                maxWidth: "120px",
                                maxHeight: "70px",
                                margin: "5px",
                                border: "2px solid black",
                                borderRadius: "5px"
                            }}
                            cldImg={img}
                            plugins={[responsive(), placeholder()]}
                        />
                        <button onClick={(event) => handleClick(event, publicId)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}
