import IAlert from '../interfaces/alert'

export const globalAlert : IAlert ={
    AlertCode : 0,
    Body : "",
    Header : ""
}


export const emptyGlobalAlert = () =>{
    globalAlert.AlertCode = 0
    globalAlert.Body = ""
    globalAlert.Header = ""
}

export const Create : string = "خطا در ثبت اطلاعات"
export const Read : string = "خطا در فراخوانی اطلاعات"
export const Update : string = "خطا در ویرایش اطلاعات"
export const Delete : string = "خطا در حذف اطلاعات"
export const Know : string = "خطا در حذف اطلاعات"
export const Unkonow : string = "خطا در حذف اطلاعات"
export const Insert : string = "خطا در ورود اطلاعات"
export const PromptDelete : string = "در صورت حذف اطلاعات امکان بازگشت وجود ندارد"
export const PromptUpdate : string = "آیا از ویرایش اطلاعات اطمینان د ارید؟"
export const Prompt : string = "هشدار از دست رفتن اطلاعات"