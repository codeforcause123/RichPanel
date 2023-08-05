import { useContext, createContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { UserAuth } from "./AuthContext";
const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
    const [plans, setPlans] = useState([{}])
    const [docID, setDocID] = useState("")
    // const { user } = UserAuth();
    const plansCollection = collection(db, "plans");
    const userCollection = collection(db, "users");
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const data = await getDocs(plansCollection);
        // console.log(data.docs)
        var x = []
        data.forEach((doc) => {
            x.push({ ...doc.data(), name: doc.id })


        })
        const sorted = x.sort((a, b) => parseInt(a["Number of active screens at one time"], 10) - parseInt(b["Number of active screens at one time"], 10))
        setPlans(sorted)
        console.log(sorted)
    }
    const addCustomerData = async (data) => {
        const { name, email, stripeID, isActive, plan, subID } = data
        // const isActive = false;
        // const plan = "none";
        const docID = email;
        const docData = {
            name,
            email,
            isActive,
            plan,
            stripeID,
            subID

        }
        const userRef = await doc(db, "users", docID);
        await setDoc(userRef, docData, { merge: true });
        setDocID(docID)
        console.log("Document written with ID: ", userRef.id);
    }

    const addPlanData = async (data) => {
        const { isActive, planName } = data
        const docRef = await doc(db, "users", docID);
        await setDoc(docRef, { isActive, planName }, { merge: true });
    }
    const updatePlan = async (email) => {
        const docRef = await doc(db, "users", email);
        const docSnap = await getDoc(docRef);
        const docData = {
            isActive: false,
            plan: "none"

        }
        await setDoc(docRef, docData, { merge: true });

    }
    const getCustomerData = async (email) => {
        // const email = user.email
        const docRef = await doc(db, "users", email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data()
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    }



    return (
        <DataContext.Provider value={{ plans, getData, addCustomerData, docID, addPlanData, updatePlan, getCustomerData }}>
            {children}
        </DataContext.Provider>
    );
}

export const DataStore = () => {
    return useContext(DataContext);
}