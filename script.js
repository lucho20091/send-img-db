const firebaseConfig = {
    apiKey: "AIzaSyBCnqrnvnJLaKu-5OLII4sXRgxaVbpWmuc",
    authDomain: "oldgram-dd94a.firebaseapp.com",
    databaseURL: "https://oldgram-dd94a-default-rtdb.firebaseio.com",
    projectId: "oldgram-dd94a",
    storageBucket: "oldgram-dd94a.appspot.com",
    messagingSenderId: "388076421720",
    appId: "1:388076421720:web:e535cb0192adbc55c9c02d"
  };

  const app = firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage()

  const inpImg = document.getElementById("input-img")

  const img = document.getElementById("img-input")

  let file, fileName, uploadedFileName

  const selectImage = () => {
    inpImg.click()
  }

  const getImageData = (e) => {
    file = e.target.files[0]
    fileName = Math.round(Math.random() * 1000) + file.name
    // if (fileName){
    //     img.style.display = "block"
    // }
  }

  const uploadImage = () => {
    const storageRef = storage.ref().child("myimages")
    const folderRef = storageRef.child(fileName)
    const uploadtask = folderRef.put(file)
  
  uploadtask.on("state_changed", (snapshot) => {
    uploadedFileName = snapshot.ref.name
  }, (error) => {
    console.log(error)
  }, () => {
    storage
        .ref("myimages")
        .child(uploadedFileName)
        .getDownloadURL()
        .then((url) => {
            if (!url){
                img.style.display = "none"
            } else {
                img.style.display = "block"
            }
            img.setAttribute("src", url)
        })
  })}




//   mostrar todas las imagenes en la base de datos

//   const listAllImages = () => {
//     const storageRef = storage.ref().child("myimages");
  
//     storageRef.listAll().then((result) => {
//       result.items.forEach((imageRef) => {
//         displayImage(imageRef);
//       });
//     }).catch((error) => {
//       console.log(error);
//     });
//   };
  
//   const displayImage = (imageRef) => {
//     imageRef.getDownloadURL().then((url) => {
//       const imgElement = document.createElement("img");
//       imgElement.src = url;
//       imgElement.style.width = "100px";  // Ajusta el tamaño de la imagen según necesites
//       document.body.appendChild(imgElement);
//     }).catch((error) => {
//       console.log(error);
//     });
//   };
  
//   // Llama a esta función para listar y mostrar todas las imágenes cuando lo necesites
//   listAllImages();