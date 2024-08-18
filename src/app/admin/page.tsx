import { NavbarAdmin } from "@/components";
import Link from "next/link";

const AdminSection = () => {
    return (
        <>
            <NavbarAdmin />
            <h1>Admin section</h1>
            <hr />
            <Link href={'admin/addNewPost'}>Agregar nuevo post</Link>
        </>
    )
}

export default AdminSection;