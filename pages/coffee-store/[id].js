import {useRouter} from 'next/router';
import Link from "next/link";


const CoffeeStore = () => {
    const router = useRouter();
    return <div>Coffee Store Page

        <Link href="/">
            <a>Back to home</a>
        </Link>

        <Link href="/coffee-store/dynamic">
            <a>Go tot dynamic page</a>
        </Link>
    </div>
}

export default CoffeeStore;