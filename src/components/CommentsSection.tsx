
interface ICommentsSection {
    postId: string
}

export const CommentsSection = ({ postId }: ICommentsSection) => {


    return (
        <div className="mx-auto max-w-3xl px-6 lg:px-8 my-20">

            <h2 className="text-xl">Comentarios</h2>
            <div className="p-5 border rounded-lg text-center text-gray-400 my-5">
                <span>Comentarios aún está en construcción. Pronto tendrá esta sección disponible.</span>
            </div>

        </div>
    )

}