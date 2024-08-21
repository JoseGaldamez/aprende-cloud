import { firestore } from "@/firebase/config";
import { PostModel } from "@/models/post.model";
import { Firestore } from "@firebase/firestore";
import {
    collection,
    getDocs,
    doc,
    getDoc,
    getCountFromServer,
    query,
    orderBy,
    limit,
} from "firebase/firestore";

let firestoreDB: Firestore;

export class BlogService {
    db: Firestore;
    listOfPosts: PostModel[] = [];

    constructor() {
        if (firestoreDB == null) {
            firestoreDB = firestore;
        }
        this.db = firestoreDB;
    }

    getAllPosts = async () => {
        const collectionPost = collection(this.db, "blog");
        const manyItems = await getCountFromServer(collectionPost);

        if (manyItems.data().count == this.listOfPosts.length) {
            return this.listOfPosts;
        }

        const q = query(collectionPost, orderBy("index"), limit(9));
        const querySnapshot = await getDocs(q);

        querySnapshot.docs.map((doc) => {
            const data: any = { ...doc.data(), id: doc.id };
            this.listOfPosts.push(new PostModel(data));
        });

        return this.listOfPosts;
    };

    getPostsByID = async (id: string) => {
        const docRef = doc(this.db, "blog", id);
        const querySnapshot = await getDoc(docRef);
        if (querySnapshot.exists()) {
            const data: any = { ...querySnapshot.data(), id };
            return new PostModel(data);
        }
    };
}
