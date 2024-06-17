import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../app/features/comments/commentsSlice.js";
import { logout } from "../../app/features/auth/authSlice.js";

export const PostComment = () => {
    const { singleProject } = useSelector((store) => store.projects);
    const { user } = useSelector((store) => store.auth);
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const isGuest = user.role === "guest";

    const onFinish = (values) => {
        if (values.content) dispatch(postComment({
            id: singleProject.id,
            comments: { content: values.content }
        }));
        form.resetFields();
    };

    const onFinishFailed = (error) => {
        console.log(error);
    };

    return (
        <Form form={ form } className="flex gap-2 items-center mb-4 px-2 md:gap-4 md:mb-0 md:px-0"
              onFinish={ onFinish }
              onFinishFailed={ onFinishFailed }
        >
            <Form.Item name="content" className="m-0 p-0 flex-1">
                <Input
                    className="border disabled:cursor-not-allowed disabled:opacity-50 file:bg-transparent file:border-0 file:font-medium file:text-sm flex flex-1 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-Thesis-200 h-10 px-3 py-2 rounded-md text-sm w-full md:text-sm"
                    disabled={ isGuest }
                    placeholder={ `${ isGuest ? "Log in to comment..." : "Add a comment..." }` } data-id="83" />
            </Form.Item>
            <Form.Item className="m-0 p-0">
                { isGuest ? (
                    <button
                        onClick={ () => {
                            dispatch(logout());
                        } }
                        className="bg-Thesis-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 font-medium h-10 inline-flex items-center justify-center px-4 py-2 rounded-md text-white text-xs transition-colors whitespace-nowrap md:text-sm"
                        type="submit" data-id="84">
                        Login
                    </button>
                ) : (
                    <button
                        className="bg-Thesis-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 font-medium h-10 inline-flex items-center justify-center px-4 py-2 rounded-md text-white text-xs transition-colors whitespace-nowrap md:text-sm"
                        type="submit" data-id="84">
                        Post
                    </button>
                ) }
            </Form.Item>
        </Form>
    );
};