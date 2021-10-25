import { createSlice } from "@reduxjs/toolkit";

const directorySlice = createSlice({
  name: "directory",
  initialState: {
    directoryItems: [
      {
        title: "protein powder",
        imageUrl:
          "https://images.theconversation.com/files/311128/original/file-20200121-117949-s66cxo.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        id: 1,
        linkUrl: "/directory/protein_powder",
      },
      {
        title: "food & snacks",
        imageUrl:
          "https://media.istockphoto.com/photos/athele-eating-protein-bar-picture-id1138839242?k=20&m=1138839242&s=612x612&w=0&h=sqkYgVAb4EiGqWflcXoOQtv31J5hhjxlYcPTefSJJi0=",
        id: 2,
        linkUrl: "/directory/food_snacks",
      },
      {
        title: "vitamins & minerals",
        imageUrl:
          "https://post.psychcentral.com/wp-content/uploads/2020/02/man-drinking-smoothie-protein-shake-732x549-thumbnail.jpg",
        id: 3,
        linkUrl: "/directory/vitamins_minerals",
      },
      {
        title: "weight management",
        imageUrl:
          "https://www.heart.org/-/media/aha/h4gm/article-images/lose-weight-and-keep-it-off.jpg?h=683&la=en&mw=1140&w=1024&hash=ECBC3D1A36375E6AA9A15A95EDFB85032A0BF1E7",
        size: "large",
        id: 4,
        linkUrl: "/directory/weight_management",
      },
    ],
  },
  reducers: {},
});

export default directorySlice;
