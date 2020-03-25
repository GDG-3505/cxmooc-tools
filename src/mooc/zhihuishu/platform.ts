import { MoocFactory, Mooc } from "../factory";import { ZhsVideo } from "./video";import { ZhsExam } from "./exam";

export class ZhsPlatform implements MoocFactory {
    public CreateMooc(): Mooc {
        let mooc: Mooc = null;
        if (document.URL.indexOf("studyh5.zhihuishu.com/videoStudy.html") > 0) {
            mooc = new ZhsVideo();
        } else if (document.URL.indexOf("zhihuishu.com/stuExamWeb.html") > 0) {
            mooc = new ZhsExam();
        }
        return mooc;
    }
}
