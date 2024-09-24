// 이미지 모달이 뜨는 페이지.
// 모달처럼 보이나 하단에는 모달이 뜨기 전의 페이지가 그대로 보인다. = 인터셉팅
import Home from "@/app/(afterLogin)/home/page";

type Props = {
    params: {
        username: string;
        id: string;
        photoId: string;
    };
};

export default function Page({ params }: Props) {
    params.username;
    params.id;
    params.photoId;
    return (
        <>
            <Home />
        </>
    );
}
