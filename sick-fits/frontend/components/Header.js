import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
    return (
    <header>
        <div className="bar">
            <Link href="/">Sick Fits</Link>

        </div>
        <div classNAme="sub-bar">
            <p>Search</p>
        </div>
        <Nav/>
    </header> 
    )
}