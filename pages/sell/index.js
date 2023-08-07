import Header from "@/src/components/Header";
import React, { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/src/firebase-config";
import { getDownloadURL, ref, getStorage, uploadBytes } from "firebase/storage";

import { useState } from "react";
const index = () => {
  const [type, setType] = useState("Machine");
  const [category, setCategory] = useState("");
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const [TypicalSpecification, setTypicalSpecification] = useState("");
  const [DetailedSpecification, setDetailedSpecification] = useState("");
  // const [productPrice, setproductPrice] = useState("");
  const [img, setImg] = useState([]);
  const [doc, setDoc] = useState();
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");

  useEffect(() => {
    setCategory(localStorage.getItem("sellerType"));
    setSellerName(localStorage.getItem("userName"));
    setSellerEmail(localStorage.getItem("email"));
  }, []);

  const [approve, setApprove] = useState("Not approve");

  let databaseRef;
  let databaseRef1;
  let typepath = `POSTS/GjZxh7T7CJsYv1lEEoyW/Machine/VHgC9rJmSFoK1CV1o922/${category}`;
  const downloadImageURLs = [];
  let downloadDocumentURLs = "";

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
      );
      documentURLs = await uploadBytes(documentRef, doc);
      await getDownloadURL(ref(storageRef, documentURLs.ref.fullPath)).then(
        (response) => {
          downloadDocumentURLs = response;
        }
      );

      const dataShow = {
        productCode: productCode,
        productName: productName,
        TypicalSpecification: TypicalSpecification,
        productDescription: DetailedSpecification,
        // productPrice: productPrice,
        imageUrls: downloadImageURLs,
        documentURLs: downloadDocumentURLs,
        firstapprove: approve,
        category: category,
        type: type,
        sellerEmail: sellerEmail,
        sellerName: sellerName,
      };
      await addDoc(databaseRef1, dataShow);
      await addDoc(databaseRef, dataShow).then(() => {
        alert("submitted");
        setProductCode("");
        setProductName("");
        setDoc("");
        setTypicalSpecification("");
        setDetailedSpecification("");
      });
    } catch (error) {
      console.log(error.message);
    }
  };
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

        <div className="w-full h-screen flex flex-col items-center justify-start  mt-[6rem]">
          {/* label */}
          <label className="w-[15%] flex items-center justify-center h-[5%] mb-10 text-[30px] font-[600]">
            Add Product
          </label>
          {/* image */}
          <div className="w-[15%] h-[10%] flex items-center justify-center bg-yellow-300 rounded-lg drop-shadow-lg hover:scale-[1.03] transition-[1s] cursor-pointer">
            <label htmlFor="image">Image +</label>
            <input
              type="file"
              className="hidden"
              onChange={(e) => setImg(e.target.files)}
              id="image"
              multiple
            />
          </div>
          {/* Document */}
          <div className="w-[15%] h-[10%] mt-5 flex items-center justify-center bg-yellow-300 rounded-lg drop-shadow-lg hover:scale-[1.03] transition-[1s] cursor-pointer">
            <label htmlFor="document">Catalog +</label>
            <input
              type="file"
              className="hidden"
              onChange={(e) => setDoc(e.target.files)}
              id="document"
            />
          </div>
          {/* fields */}
          <input
            type="text"
            placeholder="Product Code"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-10 border border-gray-400 text-black rounded-md"
          />
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />
          <input
            type="text"
            placeholder="Typical Specification"
            value={TypicalSpecification}
            onChange={(e) => setTypicalSpecification(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />
          <textarea
            placeholder="Detailed Specification"
            value={DetailedSpecification}
            onChange={(e) => setDetailedSpecification(e.target.value)}
            className="w-[25%] h-[20%] pl-5 mt-5 border border-gray-400 text-black rounded-md resize-none"
          ></textarea>
          {/* <input
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setproductPrice(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          /> */}
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
