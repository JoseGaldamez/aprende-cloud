import { firestore } from "@/firebase/config";
import { PostModel } from "@/models/post.model";
import { Firestore } from "@firebase/firestore";
import { collection, getDocs, getCountFromServer } from "firebase/firestore";

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

        const querySnapshot = await getDocs(collectionPost);

        querySnapshot.docs.map((doc) => {
            const data: any = { ...doc.data(), id: doc.id };
            this.listOfPosts.push(new PostModel(data));
        });

        return this.listOfPosts;
    };
}
