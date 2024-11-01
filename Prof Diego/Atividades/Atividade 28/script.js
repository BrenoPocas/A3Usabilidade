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
  apiKey: "AIzaSyAra1XoaODnO7vZPE0yfeJD9iRoJKmQrh0",
  authDomain: "atividadecrud-18e1c.firebaseapp.com",
  projectId: "atividadecrud-18e1c",
  storageBucket: "atividadecrud-18e1c.appspot.com",
  messagingSenderId: "465914192072",
  appId: "1:465914192072:web:7fe502d967eadb6eb205fd",
  measurementId: "G-QYCWY2HHKM",
};

// inicialze firebase
const app = initializeApp(firebaseConfig);

//pegando base de dados firestore do firebase
const db = getFirestore(app);

const notify = document.querySelector(".notify"); // TODO popup

// adicionando dados na base de dados firebase

async function addData() {
  const nome = document.querySelector("#nome").value;
  const rg = document.querySelector("#rg").value;
  const pai = document.querySelector("#pai").value;
  const escolariedade = document.querySelector("#escolariedade").value;
  const telefone = document.querySelector("#telefone").value;
  const email = document.querySelector("#email").value;
  const date = document.querySelector("#date").value;
  const cpf = document.querySelector("#cpf").value;
  const mae = document.querySelector("#mae").value;
  const profissao = document.querySelector("#profissao").value;
  const celular = document.querySelector("#celular").value;

  try {
    const DocRef = await addDoc(collection(db, "users"), {
      nome: nome,
      rg: rg,
      pai: pai,
      escolariedade: escolariedade,
      telefone: telefone,
      email: email,
      date: date,
      cpf: cpf,
      mae: mae,
      profissao: profissao,
      celular: celular,
    });

    notify.innerHTML = `Data Added `;

    document.querySelector("#nome").value = "";
    document.querySelector("#rg").value = "";
    document.querySelector("#pai").value = "";
    document.querySelector("#escolariedade").value = "";
    document.querySelector("#telefone").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#date").value = "";
    document.querySelector("#cpf").value = "";
    document.querySelector("#mae").value = "";
    document.querySelector("#profissao").value = "";
    document.querySelector("#celular").value = "";

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
              <th>CPF</th>
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
            <td>${data.nome}</td>
            <td>${data.email}</td>
            <td>${data.cpf}</td>
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

  document.body.appendChild(popup); // Add popup to the body
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

    document.querySelector("#nome").value = currentUser.nome;
    document.querySelector("#rg").value = currentUser.rg;
    document.querySelector("#pai").value = currentUser.pai;
    document.querySelector("#escolariedade").value = currentUser.escolariedade;
    document.querySelector("#telefone").value = currentUser.telefone;
    document.querySelector("#email").value = currentUser.email;
    document.querySelector("#date").value = currentUser.date;
    document.querySelector("#cpf").value = currentUser.cpf;
    document.querySelector("#mae").value = currentUser.mae;
    document.querySelector("#profissao").value = currentUser.profissao;
    document.querySelector("#celular").value = currentUser.celular;

    const updateDataBtn = document.querySelector("#update_data");
    updateDataBtn.classList.add("show");
    addBtn.classList.add("hide");
    updateDataBtn.addEventListener("click", async function () {
      const newNome = document.querySelector("#nome").value;
      const newRG = document.querySelector("#rg").value;
      const newPai = document.querySelector("#pai").value;
      const newEscolariedade = document.querySelector("#escolariedade").value;
      const newTelefone = document.querySelector("#telefone").value;
      const newEmail = document.querySelector("#email").value;
      const newDate = document.querySelector("#date").value;
      const newCPF = document.querySelector("#cpf").value;
      const newMae = document.querySelector("#mae").value;
      const newProfissao = document.querySelector("#profissao").value;
      const newCelular = document.querySelector("#celular").value;

      if (newNome !== null && newEmail !== null) { //AJUDA AQUI
        await updateDoc(doc(db, "users", id), {
          nome: newNome,
          rg: newRG,
          pai: newPai,
          escolariedade: newEscolariedade,
          telefone: newTelefone,
          email: newEmail,
          date: newDate,
          cpf: newCPF,
          mae: newMae,
          profissao: newProfissao,
          celular: newCelular,
        });

        notify.innerHTML = "Data Updated";
        GetData();
        updateDataBtn.classList.remove("show");
        addBtn.classList.remove("hide");

        document.querySelector("#nome").value = "";
        document.querySelector("#rg").value = "";
        document.querySelector("#pai").value = "";
        document.querySelector("#escolariedade").value = "";
        document.querySelector("#telefone").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#date").value = "";
        document.querySelector("#cpf").value = "";
        document.querySelector("#mae").value = "";
        document.querySelector("#profissao").value = "";
        document.querySelector("#celular").value = "";

        setTimeout(() => {
          notify.innerHTML = "";
        }, 3000);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
