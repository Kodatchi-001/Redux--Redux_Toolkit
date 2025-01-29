import Link from "next/link";

export default function Home() {
    return <>
        <div>
            <h1>Redux</h1>
            <ul>
                <li><Link href="/redux/counter">Counter</Link></li>
                <li><Link href="/redux/form">Form</Link></li>
            </ul>
        </div>
        <div>
            <h1>Redux Toolkit</h1>
            <ul>
                <li><Link href="/reduxToolkit/counter">Counter</Link></li>
                <li><Link href="/reduxToolkit/form">Form</Link></li>
            </ul>
        </div>
    </>
}