import { useRouter } from 'next/router'
import PostsList from './components/postsList/PostsList';

export default function Posts() {
    const router = useRouter();
    return (
        <>
            <button onClick={() => router.push('/') } >GO TO HOME</button>
            <PostsList/>
        </>
    )
}
