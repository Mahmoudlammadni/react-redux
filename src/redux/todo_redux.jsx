const initialstate = {
    taches: [
        { id: 1, titre: "tache1", date: "2025/5/7", etat: "en cours" },
        { id: 2, titre: "tache2", date: "2025/5/8", etat: "en cours" },
        { id: 3, titre: "tache3", date: "2025/5/9", etat: "en cours" },
        { id: 4, titre: "tache4", date: "2025/5/10", etat: "en cours" },
        { id: 5, titre: "tache5", date: "2025/5/11", etat: "en cours" },
        { id: 6, titre: "tache6", date: "2025/5/12", etat: "complète" },
        { id: 7, titre: "tache7", date: "2025/5/13", etat: "complète" },
        { id: 8, titre: "tache8", date: "2025/5/14", etat: "complète" },
        { id: 9, titre: "tache9", date: "2025/5/15", etat: "complète" },
        { id: 10, titre: "tache10", date: "2025/5/16", etat: "complète" }
    ],
    contact: [{ id: 1, nom: "morad", telephone: "0612345667", email: "morad@gmail.com" },
            { id: 2, nom: "Sara", telephone: "0623456789", email: "sara@gmail.com" },
            { id: 3, nom: "Ahmed", telephone: "0634567890", email: "ahmed@gmail.com" },
            { id: 4, nom: "Zaynab", telephone: "0645678901", email: "zaynab@gmail.com" },
            { id: 5, nom: "Ali", telephone: "0656789012", email: "ali@gmail.com" },
            { id: 6, nom: "Fatima", telephone: "0667890123", email: "fatima@gmail.com" }
        
    ]
}
const redux_todo = (state = initialstate, action) => {
    switch (action.type) {
        case "add":
            return { ...state, taches: [...state.taches, action.payload] };
        case "modify":
            const tch = state.taches.find((t) => t.id == action.payload.id);
            if (tch) {
                tch.titre = action.payload.titre;
                tch.date = action.payload.date;
                tch.etat = action.payload.etat;
            }
            return { ...state };  
        case "delete":
            return { ...state, taches: state.taches.filter((tch) => tch.id !== action.payload) };
        case "addc":
            return { ...state, contact: [...state.contact, action.payload] };
        case "deletc":
            return { ...state, contact: state.contact.filter((c) => c.id !== action.payload) };
        case "modyc":
            const cnt = state.contact.find((c) => c.id == action.payload.id);
            if (cnt) {
                cnt.nom = action.payload.nom;
                cnt.telephone = action.payload.telephone;
                cnt.email = action.payload.email; 
            }
          
        default:
            return state;
    }
};
export default redux_todo;
