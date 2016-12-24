/**
 * PK: Primary key
 * FK: Foreign key
 * 
 * Some model properties may not be needed in the final
 * version. This needs to be cleared out.
 * 
 * At first, Markdown will be used to format the 
 * big texts.
 */

/**
 * A fact about anything. One of the main actors
 * of this application.
 * 
 * id: PK
 * title: The short title of a note
 * content: The content of the note with a max length
 *          of 1024 characters.
 * fullText: A note can contain a full text which will
 *          be shown on the note specific webpage.
 *          This text will be formatted using Markdown.
 * authorId: FK. The user(author) id (PK)
 * createdOn: The creation date of the note
 */
var note = {
    id: 1,
    title: 'Somecool Note About Dolphins',
    content: 'Dolphins are pretty cool m8',
    text: 'Markup text',
    authorId: 1,
    createdOn: '24.12.2016'
};

var noteRevision = {
    // TODO: create note revisions
}

/**
 * Connector between a tag and a note.
 * 
 * id: PK
 * noteId: FK. The note id
 * tagId: FK. The tag id
 */
var note_tag = {
    id: 55,
    noteId: 1,
    tagId: 4
};

/**
 * A tag which can be used on questions and notes.
 * 
 * id: PK
 * text: The text of the tag
 */
var tag = {
    id: 4,
    text: 'Dolphins'
};

/**
 * A rating of a user to a specific note.
 * 
 * id: PK
 * raterId: FK. The PK of the rater/user
 * raterNoteId: FK. The PK of the rated note
 * rating: The given score (1-5). This symbolizes the
 *          quality of the note. For example, a note 
 *          with sources can be given a higher score.
 * reason: The reason for this rating. This gives the
 *          note poster a chance to correct the note
 *          or do it better the next time.
 */
var ratings = {
    id: 66,
    raterId: 32,
    ratedNoteId: 1,
    rating: 5,
    reason: 'Very good information'
};

/**
 * A user can favorize a note. This note will be shown
 * on the /notes page.
 * 
 * id: PK
 * userId: FK. id of the user who favorized
 * noteId: FK. id of the note which was favorized
 */
var favorite = {
    id: 11,
    userId: 32,
    noteId: 1
}

/**
 * The model for a standard user.
 * It contains only needed information.
 * 
 * id: PK
 * username: The name to be displayed. 
 *          Not neccessarily the login name!
 * email: The email address of the user.
 * joinedOn: First date of registration
 * lastActivity: Last time the user was active/logged
 *              in.
 */
var user = {
    id: 32,
    username: 'Lakupapa',
    email: 'lokalakel@gg.wp',
    joinedOn: '20.12.2016',
    lastActivity: '25.12.2016'
};

/**
 * A user can subscribe to another user to keep updated.
 * 
 * id: PK
 * subscriberId: FK. The id of the user who subscribed
 *              to another user.
 * subscribedUserId: FK The id of the user who was 
 *                  subscribed to.
 * subscribedOn: The date of subscription.
 */
var subscription = {
    id: 222,
    subscriberId: 32,
    subscribedUserId: 44,
    subscribedOn: '12.12.2016'
}

/**
 * A question which can be created if there are no 
 * notes answering the searched terms/questions/
 * 
 * id: PK
 * title: The question title.
 * text: The full Markdown formatted question text.
 * authorId: FK. The PK of the user 
 * askedOn: The date of post creation
 */
var question = {
    id: 123,
    title: 'What is the hardest metal?',
    text: 'I read that diamonds are the hardest'
               + 'metal. Is this true? I neew to know.'
    authorId: 32,
    askedOn: '12.12.2016'
}

var questionRevision = {
    // TODO: make question revisionas? (evaluate)
}

/**
 * A answer to a asked question. Can have a custom
 * title and has a markdown formatted text.
 * 
 * id: PK,
 * questionId: FK. Id of the question
 * title: The title of the answer. This does not have
 *          to be the original title. It can be changed.
 * text: The markdown formatted answer text.
 * createdOn: The date of post.
 */
var answer = {
    id: 4711,
    questionId: 123,
    title: 'Re: What is the hardest metal?',
    text: 'I know the answer, also here are some'
            + 'notes to prove myself.',
    createdOn: '13.12.2016'
}

/**
 * A note can be used to answer a question.
 * 
 * id: PK
 * noteId: FK. The id of the note.
 * answerId: FK. The id of the answer.
 */
var note_answer = {
    id: 0815,
    noteId: 1,
    answerId: 4711,

}