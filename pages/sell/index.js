import Header from "@/src/components/Header";
import React, { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/src/firebase-config";
import { getDownloadURL, ref, getStorage, uploadBytes } from "firebase/storage";
import { HiOutlineInformationCircle } from "react-icons/hi";

import { useState } from "react";
import Tooltips from "@/src/components/Tooltips";
const index = () => {
  const [type, setType] = useState("Spare parts");
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [typicalDescriotion, setTypicalDescription] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [doc, setDoc] = useState();
  const [size, setSeize] = useState("");
  const [dateofManu, setDateofManu] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState([]);
  const [approve, setApprove] = useState("Not approve");

  useEffect(() => {
    setCategory(localStorage.getItem("sellerType"));
    setSellerName(localStorage.getItem("userName"));
    setSellerEmail(localStorage.getItem("email"));
  }, []);

  let databaseRef;
  let databaseRef1;

  let typepath = `POSTS/GjZxh7T7CJsYv1lEEoyW/Machine/VHgC9rJmSFoK1CV1o922/${category}`;
  const downloadImageURLs = [];
  let downloadDocumentURLs = "";
  // if (type == "Machine") {
  //   typepath = `POSTS/GjZxh7T7CJsYv1lEEoyW/Machine/VHgC9rJmSFoK1CV1o922/${category}`;
  // } else {
  //   typepath = `POSTS/GjZxh7T7CJsYv1lEEoyW/Spareparts/jcJW7idJNETVspHqz7ir/${category}`;
  // }
  try {
    databaseRef = collection(db, typepath);
    databaseRef1 = collection(
      db,
      `SellerProduct/hjSXho3U2Ictlf1XdAIu/${sellerEmail}`
    );
  } catch (error) {
    console.log(error.message);
  }

  const sellfun = async () => {
    try {
      const storageRef = getStorage();
      let imageURLs = "";
      let documentURLs = "";

      let ins = 0;
      let ins1 = 0;
      for (const image of img) {
        const imagRef = ref(
          storageRef,
          `Post/Image/'${Date.now()}-${image.name}`
        );

        imageURLs = await uploadBytes(imagRef, image);
        await getDownloadURL(ref(storageRef, imageURLs.ref.fullPath)).then(
          (response) => {
            downloadImageURLs.push(response);
          }
        );
      }
      const documentRef = ref(
        storageRef,
        `Post/Document/'${Date.now()}-${doc.name}`
      )
      documentURLs = await uploadBytes(documentRef, doc);
      await getDownloadURL(ref(storageRef, documentURLs.ref.fullPath)).then(
        (response) => {
          downloadDocumentURLs=response
        }

      )

      const dataShow = {
        productName: productName,
        productDescription: productDescription,
        category: category,
        type: type,
        sellerName: sellerName,
        sellerEmail: sellerEmail,
        // sellerPhone: sellerPhone,
        size: size,
        dateofManu: dateofManu,
        price: price,
        imageUrls: downloadImageURLs,
        documentUrl: documentURLs,
        firstapprove: approve,
        typicalDescriotion: typicalDescriotion,
      };
      await addDoc(databaseRef1, dataShow);
      await addDoc(databaseRef, dataShow).then(() => {
        alert("submitted");
        setProductName("");
        setProductDescription("");
        setCategory("");
        setType("");
        setSellerName("");
        setSellerEmail("");
        // setSellerPhone("");
        setSeize("");
        setDateofManu("");
        setPrice("");
        setTypicalDescription("");
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log("path", typepath);
  return (
    <div className="">
      <div className="w-full  flex flex-col items-center justify-start">
        {/* type */}
        {/* <div className="w-[15%] h-[5%] flex items-center justify-center border bg-white  mt-8 rounded-lg drop-shadow-md absolute">
          <select
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Spare parts">Spare parts</option>
            <option value="Machine">Machine</option>
          </select>
        </div> */}
        {/* form */}

        <div className="w-full  flex flex-col items-center justify-start  mt-[6rem]">
          {/* label */}
          <label className="w-[20%] h-[40px] flex items-center justify-center  mb-10 text-[30px] font-[600]">
            ADD PRODUCT
            <Tooltips size={150} text={"this is form"}>
              <HiOutlineInformationCircle className="ml-5 text-[20px]" />
            </Tooltips>
          </label>

          {/* image */}
          <div className="w-[15%] h-[70px] flex items-center justify-center bg-yellow-300 rounded-lg drop-shadow-lg hover:scale-[1.03] transition-[1s] cursor-pointer">
            <label htmlFor="image">Image +</label>
            <input
              type="file"
              className="hidden"
              onChange={(e) => setImg(e.target.files)}
              id="image"
              multiple
            />
          </div>

          <div className="w-[15%] h-[70px] flex items-center justify-center mt-5 bg-yellow-300 rounded-lg drop-shadow-lg hover:scale-[1.03] transition-[1s] cursor-pointer">
            <label htmlFor="Doc">Document +</label>
            <input
              type="file"
              className="hidden"
              onChange={(e) => setDoc(e.target.files)}
              id="Doc"
            />
          </div>
          {/* fields */}
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-[25%] h-[40px] pl-5 mt-10 border border-gray-400 text-black rounded-md"
          />
          {/* <div className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md flex items-center ">
            <select
              id="type"
              name="type"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Category</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
              <option value="Category 4">Category 4</option>
              <option value="Category 5">Category 5</option>
              <option value="Category 6">Category 6</option>
            </select>
          </div> */}
          <input
            placeholder="Typical Description"
            value={typicalDescriotion}
            onChange={(e) => setTypicalDescription(e.target.value)}
            className="w-[25%] h-[40px] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />
          <textarea
            placeholder="Product Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="w-[25%] h-[100px] pl-5 mt-5 border border-gray-400 text-black rounded-md resize-none"
          ></textarea>

          {/* <input
            type="text"
            placeholder="Seller Name"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          /> */}
          {/* <input
            type="email"
            placeholder="Seller Email"
            value={sellerEmail}
            onChange={(e) => setSellerEmail(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          /> */}
          {/* <input
            type="text"
            placeholder="Seller Phone"
            value={sellerPhone}
            onChange={(e) => setSellerPhone(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          /> */}
        </div>

        <div className="w-full h-screen flex flex-col items-center justify-start relative mt-5">
          {/* fields */}
          <input
            type="number"
            placeholder="Size"
            value={size}
            onChange={(e) => setSeize(e.target.value)}
            className="w-[25%] h-[5%] pl-5  border border-gray-400 text-black rounded-md"
          />
          <label className="w-[25%] h-[5%]   text-black flex items-center mt-5 text-[20px]">
            Date Of Manufacture
          </label>
          <input
            type="date"
            value={dateofManu}
            onChange={(e) => setDateofManu(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />

          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />

          <button
            className="w-[10%] h-[7%]  mt-10 bg-gray-400 rounded-lg shadow-lg text-white  drop-shadow-lg hover:scale-[1.03] transition-[1s]"
            onClick={sellfun}
          >
            SELL
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
