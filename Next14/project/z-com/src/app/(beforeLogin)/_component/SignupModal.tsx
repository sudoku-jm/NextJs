"use client";
import style from "@/app/(beforeLogin)/_component/signup.module.css";
import BackButton from "@/app/(beforeLogin)/_component/BackButton";
import onSubmit from "@/app/(beforeLogin)/_lib/singup";
import { useFormState, useFormStatus } from "react-dom";

// 메세지 코드가 아닌 한글텍스트로 변환 시켜서 다시 보여주는 함수.
// 처음부터 한글이 아닌 코드로 한 건 나중에 서비스가 커졌을 경우를 대비.
function showMessage(messasge: string | null | undefined) {
    if (messasge === "no_id") {
        return "아이디를 입력하세요.";
    }
    if (messasge === "no_name") {
        return "닉네임을 입력하세요.";
    }
    if (messasge === "no_password") {
        return "비밀번호를 입력하세요.";
    }
    if (messasge === "no_image") {
        return "이미지를 업로드하세요.";
    }
    if (messasge === "user_exists") {
        return "이미 사용 중인 아이디입니다.";
    }
    return "";
}

export default function SignupModal() {
    //message : null 기본값.
    const [state, formAction] = useFormState(onSubmit, { message: null });
    // pending : 데이터 처리상태 여부
    const { pending } = useFormStatus();
    return (
        <>
            <div className={style.modalBackground}>
                <div className={style.modal}>
                    <div className={style.modalHeader}>
                        <BackButton />
                        <div>계정을 생성하세요.</div>
                    </div>
                    <form action={formAction}>
                        <div className={style.modalBody}>
                            <div className={style.inputDiv}>
                                <label
                                    className={style.inputLabel}
                                    htmlFor="id"
                                >
                                    아이디
                                </label>
                                <input
                                    id="id"
                                    name="id"
                                    className={style.input}
                                    type="text"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label
                                    className={style.inputLabel}
                                    htmlFor="name"
                                >
                                    닉네임
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    className={style.input}
                                    type="text"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label
                                    className={style.inputLabel}
                                    htmlFor="password"
                                >
                                    비밀번호
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    className={style.input}
                                    type="password"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label
                                    className={style.inputLabel}
                                    htmlFor="image"
                                >
                                    프로필
                                </label>
                                <input
                                    id="image"
                                    name="image"
                                    className={style.input}
                                    type="file"
                                    accept="image/*"
                                    required
                                />
                            </div>
                        </div>
                        <div className={style.modalFooter}>
                            <button
                                type="submit"
                                className={style.actionButton}
                                disabled={pending}
                            >
                                가입하기
                            </button>
                            <div className={style.error}>
                                {/* 메세지 */}
                                {showMessage(state?.message)}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
