// importando  SDKs di fures base
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js"; //itens relacionado a base de dados firestone

// adicione aqui o que foi copiado em seu bloco de notas
const firebaseConfig = {
  apiKey: "AIzaSyAZdWSajwCsTpqjsESsWa2mnqrKXC2FVLQ",
  authDomain: "atividade-10-10.firebaseapp.com",
  projectId: "atividade-10-10",
  storageBucket: "atividade-10-10.appspot.com",
  messagingSenderId: "974587275561",
  appId: "1:974587275561:web:5d0bdf6c183e6aed49ef38",
  measurementId: "G-KQHS3113QQ",
};

// inicialze firebase
const app = initializeApp(firebaseConfig);

//pegando base de dados firestore do firebase
const db = getFirestore(app);

const notify = document.querySelector(".notify"); // TODO popup

// adicionando dados na base de dados firebase

async function addData() {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  try {
    const DocRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email,
    });
    
    notify.innerHTML = `Data Added `;
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";

    setTimeout(() => {
      notify.innerHTML = "";
    }, 3000);
    //atualizar a pagina a cada 3 segundos

    GetData();
  } catch (eror) {
    console.log(eror);
  }
}

// constante de estado do botão cadastar
const addBtn = document.querySelector("#add_Data");
// evento de click no botão cadastar
addBtn.addEventListener("click", addData);

// buscar dados no firestore e concatene o conteúdo na tablea do html

async function GetData() {
    try {
      const getDataQuery = await getDocs(collection(db, "users"));
      let html = `
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            </tbody>
        </table>
      `;
  
      getDataQuery.forEach((doc) => {
        const data = doc.data();
        const tableRow = `
          <tr>
            <td>${doc.id}</td>
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>
              <button class="del_btn" onclick="deleteData('${doc.id}')">Excluir</button>
              <button class="up_btn" onclick="updateData('${doc.id}')">Atualizar</button>
            </td>
          </tr>
        `;
        html += tableRow;
      });
  
      document.querySelector("table").innerHTML = html;
    } catch (err) {
      console.log(err);
    }
  }
  
  GetData();

  function createConfirmationPopup(id, callback) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
      <p>Tem certeza de que deseja excluir o usuário com ID: ${id}?</p>
      <button class="confirm-btn">OK</button>
      <button class="cancel-btn">Cancelar</button>
    `;
  
    // Event listener for confirmation button
    const confirmBtn = popup.querySelector(".confirm-btn");
    confirmBtn.addEventListener("click", () => {
      callback(id); // Execute deletion function
      popup.remove(); // Remove popup after confirmation
    });
  
    // Event listener for cancel button
    const cancelBtn = popup.querySelector(".cancel-btn");
    cancelBtn.addEventListener("click", () => {
      popup.remove(); // Remove popup if user cancels
    });
  
    document.body.appendChild(popup);  // Add popup to the body
  }
  
  // evento de excluir usuário da base de dados
  window.deleteData = async function (id) {
    createConfirmationPopup(id, async (confirmedId) => {
      if (confirmedId === id) {
        try {
          await deleteDoc(doc(db, "users", id));
          notify.innerHTML = "Data Deleted";
  
          setTimeout(() => {
            notify.innerHTML = "";
          }, 3000);
  
          GetData();
        } catch (err) {
          console.log(err);
        }
      }
    });
  };
  
// atualizar dados
window.updateData = async function (id) {
  try {
    const docSnapShot = await getDoc(doc(db, "users", id));
    const currentUser = docSnapShot.data();
    document.querySelector("#name").value = currentUser.name;
    document.querySelector("#email").value = currentUser.email;

    const updateDataBtn = document.querySelector("#update_data");
    updateDataBtn.classList.add("show");
    addBtn.classList.add("hide");
    updateDataBtn.addEventListener("click", async function () {
      const newName = document.querySelector("#name").value;
      const newEmail = document.querySelector("#email").value;

      if (newName !== null && newEmail !== null) {
        await updateDoc(doc(db, "users", id), {
          name: newName,
          email: newEmail,
        });

        notify.innerHTML = "Data Updated";
        GetData();
        updateDataBtn.classList.remove("show");
        addBtn.classList.remove("hide");

        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";

        setTimeout(() => {
          notify.innerHTML = "";
        }, 3000);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
