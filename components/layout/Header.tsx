import { useRouter } from 'next/router';
import { IconButton } from '@material-ui/core';
import { ArrowBackIosOutlined } from '@material-ui/icons';

export type HeaderProp = { title: string; renderLeft?: React.ReactNode; renderRight?: React.ReactNode; }

const HeaderLeft = () => {
    const router = useRouter();
    return (
        <IconButton onClick={() => router.back()}>
            <ArrowBackIosOutlined />
        </IconButton>
    )
}

/** 組件：App專用Header */
const Header = (props: HeaderProp) => {
    return (
        <div className={`w-full py-2 flex flex-row justify-center items-center`}>
            <div className="absolute left-0.5">{props.renderLeft || <HeaderLeft />}</div>
            <div>{props.title}</div>
            <div className="absolute right-0">{props.renderRight}</div>
        </div>
    )
}

export default Header;