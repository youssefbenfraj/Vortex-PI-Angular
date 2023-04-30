export class LearningResource {
    id_learningr !: number ;
    title_learningr !: string;
    desc_learningr !: string;
    type_learningr !: string;
    url_learningr !: string;
    theme !: Theme[];
    creationdate_learningr !: string;
}

export class Theme {

    learning_resource_id_learningr !: number;
    theme !: string;
}