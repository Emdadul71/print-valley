import { message, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload/interface";
import { FC, useEffect, useState } from "react";
interface PropsType {
  errorMessage?: any;
  accept?: string;
  maxSize?: number;
  onChange: Function;
  width?: number;
  imageSource?: string;
}
export const ImageInput = (props: PropsType) => {
  const errorMessage = props?.errorMessage;
  const accept = props?.accept;
  const maxSize = props?.maxSize ?? 2;
  const width = props?.width ?? 150;
  const imageSource = props?.imageSource;

  const [imageUrl, setImageUrl] = useState<string>();
  const [isError, setIsError] = useState(errorMessage ? true : false);
  useEffect(() => {
    if (errorMessage) setIsError(true);
  }, [errorMessage]);

  const handleChange: UploadProps["onChange"] = (info: any) => {
    const isJpgOrPng =
      info.file.type === "image/jpeg" ||
      info.file.type === "image/png" ||
      info.file.type === "image/webp";
    const isInSize = info.file?.size / 1024 / 1024 < maxSize;

    if (info?.fileList.length > 0 && isJpgOrPng && isInSize) {
      props?.onChange(info?.file);

      const ImageLink = URL.createObjectURL(info?.file);
      setImageUrl(ImageLink);
    } else {
      props?.onChange();
      setImageUrl("");
    }
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/webp";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG/WEBP file!");
      setIsError(true);
    }
    const isInSize = file.size / 1024 / 1024 < maxSize;
    if (!isInSize) {
      message.error(`Image must smaller than ${maxSize}MB!`);
      setIsError(true);
    }

    // Prevent upload
    return false;
  };

  const uploadButton =
    imageUrl || imageSource ? (
      <div style={{ width: `${width}px` }}>
        <img
          crossOrigin="anonymous"
          src={imageUrl ?? imageSource}
          alt="avatar"
          style={{ width: "100%" }}
        />
      </div>
    ) : (
      <div
        style={{ width: `${width}px` }}
        className={`${isError ? "image_error" : null}`}
      >
        <img src="/images/misc/image_input.svg" alt="input_image" />
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    );

  return (
    <div style={{ width: `${width}px` }}>
      <Upload
        accept={`${accept ?? "image/png, image/jpeg, image/webp"} `}
        beforeUpload={beforeUpload}
        onChange={(e) => {
          handleChange(e);
        }}
        maxCount={1}
        multiple={false}
      >
        {uploadButton}
      </Upload>
    </div>
  );
};

export default ImageInput;
