import moment from "moment";

export const initialValue = {
  title: "",
  subtitle: "",
  date: new Date(moment().format("YYYY-MM-DD")),
  slug: "",
  location: "",
  featureImageSrc: "",
  description: "",
  categoryId: "",
  metaTitle: "",
  images: [
    {
      source: "",
      caption: "",
    },
  ],
  metaDescription: "",
};
