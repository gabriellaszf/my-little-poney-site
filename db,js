const dbName = "PonyCaosDB";
const storeName = "datasNascimento";

function iniciarBanco() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject("Erro no DB");
    });
}

async function adicionarData(objeto) {
    const db = await iniciarBanco();
    return new Promise((resolve) => {
        const tx = db.transaction([storeName], "readwrite");
        const store = tx.objectStore(storeName);
        store.add(objeto);
        tx.oncomplete = () => resolve(true);
    });
}

async function buscarDatas() {
    const db = await iniciarBanco();
    return new Promise((resolve) => {
        const tx = db.transaction([storeName], "readonly");
        const store = tx.objectStore(storeName);
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result);
    });
}// db.js - Framework do Banco de Dados

const dbName = "PonyDatabase";
const storeName = "ponies";

// Inicia o banco de dados
function iniciarBanco() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject("Erro ao abrir o banco");
    });
}

// Salva um pônei
async function adicionarItem(item) {
    const db = await iniciarBanco();
    return new Promise((resolve) => {
        const transaction = db.transaction([storeName], "readwrite");
        const store = transaction.objectStore(storeName);
        store.add(item);
        transaction.oncomplete = () => resolve(true);
    });
}

// Busca todos os pôneis salvos
async function buscarItens() {
    const db = await iniciarBanco();
    return new Promise((resolve) => {
        const transaction = db.transaction([storeName], "readonly");
        const store = transaction.objectStore(storeName);
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
    });
}
