YouQuiz Api
===========

Crud Api

Version: v1

    All rights reserved

http://apache.org/licenses/LICENSE-2.0.html

Access
------

Methods
-------

\[ Jump to [Models](#__Models) \]

### Table of Contents

#### [AnswerController](#AnswerController)

* [`delete /api/v1/answer/{id}`](#deleteAnswer)
* [`get /api/v1/answer`](#findAllAnswers)
* [`get /api/v1/answer/{id}`](#findOneAnswer)
* [`get /api/v1/answer/paginated`](#getPaginatedAnswers)
* [`post /api/v1/answer`](#saveAnswer)
* [`put /api/v1/answer/{id}`](#updateAnswer)

#### [AssignQuizController](#AssignQuizController)

* [`delete /api/v1/assignQuiz/{id}`](#deleteAssignQuiz)
* [`get /api/v1/assignQuiz`](#findAllAssignQuizs)
* [`get /api/v1/assignQuiz/{id}`](#findOneAssignQuiz)
* [`get /api/v1/assignQuiz/paginated`](#getPaginatedAssignQuizs)
* [`post /api/v1/assignQuiz`](#saveAssignQuiz)
* [`put /api/v1/assignQuiz/{id}`](#updateAssignQuiz)

#### [LevelController](#LevelController)

* [`delete /api/v1/level/{id}`](#deleteLevel)
* [`get /api/v1/level`](#findAllLevels)
* [`get /api/v1/level/{id}`](#findOneLevel)
* [`get /api/v1/level/paginated`](#getPaginatedLevels)
* [`post /api/v1/level`](#saveLevel)
* [`put /api/v1/level/{id}`](#updateLevel)

#### [MediaController](#MediaController)

* [`delete /api/v1/media/{id}`](#deleteMedia)
* [`get /api/v1/media`](#findAllMedias)
* [`get /api/v1/media/{id}`](#findOneMedia)
* [`get /api/v1/media/paginated`](#getPaginatedMedias)
* [`post /api/v1/media`](#saveMedia)
* [`put /api/v1/media/{id}`](#updateMedia)

#### [QuestionController](#QuestionController)

* [`post /api/v1/question`](#addQuestion)
* [`delete /api/v1/question/{id}`](#deleteQuestion)
* [`get /api/v1/question`](#getAllQuestions)
* [`get /api/v1/question/{id}`](#getOneQuestion)
* [`get /api/v1/question/paginated`](#getPaginatedQuestions)
* [`put /api/v1/question/{id}`](#updateQuestion)

#### [QuizController](#QuizController)

* [`delete /api/v1/quiz/{id}`](#deleteQuiz)
* [`get /api/v1/quiz`](#findAllQuizs)
* [`get /api/v1/quiz/{id}`](#findOneQuiz)
* [`get /api/v1/quiz/paginated`](#getPaginatedQuizs)
* [`post /api/v1/quiz`](#saveQuiz)
* [`put /api/v1/quiz/{id}`](#updateQuiz)

#### [ResponseController](#ResponseController)

* [`post /api/v1/response`](#addResponse)
* [`delete /api/v1/response/{id}`](#deleteResponse)
* [`get /api/v1/response`](#getAllResponses)
* [`get /api/v1/response/{id}`](#getOneResponse)
* [`get /api/v1/response/paginated`](#getPaginatedResponses)
* [`put /api/v1/response/{id}`](#updateResponse)

#### [StudentController](#StudentController)

* [`delete /api/v1/student/{id}`](#deleteStudent)
* [`get /api/v1/student`](#findAllStudents)
* [`get /api/v1/student/{id}`](#findOneStudent)
* [`get /api/v1/student/paginated`](#getPaginatedStudents)
* [`post /api/v1/student`](#saveStudent)
* [`put /api/v1/student/{id}`](#updateStudent)

#### [SubjectController](#SubjectController)

* [`post /api/v1/subjects`](#addSubject)
* [`delete /api/v1/subjects/{id}`](#deleteSubject)
* [`get /api/v1/subjects`](#getAllSubjects)
* [`get /api/v1/subjects/{id}`](#getOneSubject)
* [`get /api/v1/subjects/paginated`](#getPaginatedSubjects)
* [`put /api/v1/subjects/{id}`](#updateSubject)

#### [TeacherController](#TeacherController)

* [`delete /api/v1/teacher/{id}`](#deleteTeacher)
* [`get /api/v1/teacher`](#findAllTeachers)
* [`get /api/v1/teacher/{id}`](#findOneTeacher)
* [`get /api/v1/teacher/paginated`](#getPaginatedTeachers)
* [`post /api/v1/teacher`](#saveTeacher)
* [`put /api/v1/teacher/{id}`](#updateTeacher)

#### [TempQuestionController](#TempQuestionController)

* [`delete /api/v1/tempQuestion/{id}`](#deleteTempQuestion)
* [`get /api/v1/tempQuestion`](#findAllTempQuestions)
* [`get /api/v1/tempQuestion/{id}`](#findOneTempQuestion)
* [`get /api/v1/tempQuestion/paginated`](#getPaginatedTempQuestions)
* [`post /api/v1/tempQuestion`](#saveTempQuestion)
* [`put /api/v1/tempQuestion/{id}`](#updateTempQuestion)

#### [ValidationController](#ValidationController)

* [`delete /api/v1/validation/{id}`](#deleteValidation)
* [`get /api/v1/validation`](#findAllValidations)
* [`get /api/v1/validation/{id}`](#findOneValidation)
* [`get /api/v1/validation/paginated`](#getPaginatedValidations)
* [`post /api/v1/validation`](#saveValidation)
* [`put /api/v1/validation/{id}`](#updateValidation)

AnswerController
================

[Up](#__Methods)

    delete /api/v1/answer/{id}

(deleteAnswer)

### Path parameters

id (required)

Path Parameter — format: int64

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK[](#)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/answer

(findAllAnswers)

### Return type

array\[[AnswerDto](#AnswerDto)\]

### Example data

Content-Type: application/json

    [ {
      "validationId" : 7,
      "assignQuizId" : 9,
      "id" : 5,
      "played" : 2
    }, {
      "validationId" : 7,
      "assignQuizId" : 9,
      "id" : 5,
      "played" : 2
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/answer/{id}

(findOneAnswer)

### Path parameters

id (required)

Path Parameter — format: int64

### Return type

[AnswerDto](#AnswerDto)

### Example data

Content-Type: application/json

    {
      "validationId" : 7,
      "assignQuizId" : 9,
      "id" : 5,
      "played" : 2
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [AnswerDto](#AnswerDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/answer/paginated

(getPaginatedAnswers)

### Query parameters

page (optional)

Query Parameter — default: 0 format: int32

size (optional)

Query Parameter — default: 10 format: int32

### Return type

array\[[AnswerDto](#AnswerDto)\]

### Example data

Content-Type: application/json

    [ {
      "validationId" : 7,
      "assignQuizId" : 9,
      "id" : 5,
      "played" : 2
    }, {
      "validationId" : 7,
      "assignQuizId" : 9,
      "id" : 5,
      "played" : 2
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    post /api/v1/answer

(saveAnswer)

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [AnswerDto](#AnswerDto) (required)

Body Parameter —

### Return type

[AnswerDto](#AnswerDto)

### Example data

Content-Type: application/json

    {
      "validationId" : 7,
      "assignQuizId" : 9,
      "id" : 5,
      "played" : 2
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [AnswerDto](#AnswerDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    put /api/v1/answer/{id}

(updateAnswer)

### Path parameters

id (required)

Path Parameter — format: int64

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [AnswerDto](#AnswerDto) (required)

Body Parameter —

### Return type

[AnswerDto](#AnswerDto)

### Example data

Content-Type: application/json

    {
      "validationId" : 7,
      "assignQuizId" : 9,
      "id" : 5,
      "played" : 2
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [AnswerDto](#AnswerDto)

#### 400

Bad Request

#### 404

Not Found

* * *

AssignQuizController
====================

[Up](#__Methods)

    delete /api/v1/assignQuiz/{id}

(deleteAssignQuiz)

### Path parameters

id (required)

Path Parameter — format: int64

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK[](#)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/assignQuiz

(findAllAssignQuizs)

### Return type

array\[[AssignQuizRespDto](#AssignQuizRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "date" : "2000-01-23",
      "studentId" : 5,
      "score" : 6,
      "chanceNumber" : 1,
      "notes" : "notes",
      "quizId" : 5,
      "answers" : [ {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      }, {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      } ],
      "id" : 0
    }, {
      "date" : "2000-01-23",
      "studentId" : 5,
      "score" : 6,
      "chanceNumber" : 1,
      "notes" : "notes",
      "quizId" : 5,
      "answers" : [ {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      }, {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      } ],
      "id" : 0
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/assignQuiz/{id}

(findOneAssignQuiz)

### Path parameters

id (required)

Path Parameter — format: int64

### Return type

[AssignQuizRespDto](#AssignQuizRespDto)

### Example data

Content-Type: application/json

    {
      "date" : "2000-01-23",
      "studentId" : 5,
      "score" : 6,
      "chanceNumber" : 1,
      "notes" : "notes",
      "quizId" : 5,
      "answers" : [ {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      }, {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      } ],
      "id" : 0
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [AssignQuizRespDto](#AssignQuizRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/assignQuiz/paginated

(getPaginatedAssignQuizs)

### Query parameters

page (optional)

Query Parameter — default: 0 format: int32

size (optional)

Query Parameter — default: 10 format: int32

### Return type

array\[[AssignQuizRespDto](#AssignQuizRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "date" : "2000-01-23",
      "studentId" : 5,
      "score" : 6,
      "chanceNumber" : 1,
      "notes" : "notes",
      "quizId" : 5,
      "answers" : [ {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      }, {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      } ],
      "id" : 0
    }, {
      "date" : "2000-01-23",
      "studentId" : 5,
      "score" : 6,
      "chanceNumber" : 1,
      "notes" : "notes",
      "quizId" : 5,
      "answers" : [ {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      }, {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      } ],
      "id" : 0
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    post /api/v1/assignQuiz

(saveAssignQuiz)

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [AssignQuizDto](#AssignQuizDto) (required)

Body Parameter —

### Return type

[AssignQuizRespDto](#AssignQuizRespDto)

### Example data

Content-Type: application/json

    {
      "date" : "2000-01-23",
      "studentId" : 5,
      "score" : 6,
      "chanceNumber" : 1,
      "notes" : "notes",
      "quizId" : 5,
      "answers" : [ {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      }, {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      } ],
      "id" : 0
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [AssignQuizRespDto](#AssignQuizRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    put /api/v1/assignQuiz/{id}

(updateAssignQuiz)

### Path parameters

id (required)

Path Parameter — format: int64

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [AssignQuizDto](#AssignQuizDto) (required)

Body Parameter —

### Return type

[AssignQuizRespDto](#AssignQuizRespDto)

### Example data

Content-Type: application/json

    {
      "date" : "2000-01-23",
      "studentId" : 5,
      "score" : 6,
      "chanceNumber" : 1,
      "notes" : "notes",
      "quizId" : 5,
      "answers" : [ {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      }, {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      } ],
      "id" : 0
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [AssignQuizRespDto](#AssignQuizRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

LevelController
===============

[Up](#__Methods)

    delete /api/v1/level/{id}

(deleteLevel)

### Path parameters

id (required)

Path Parameter — format: int64

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK[](#)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/level

(findAllLevels)

### Return type

array\[[LevelRespDto](#LevelRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "maxPoints" : 6.027456183070403,
      "minPoints" : 1.4658129805029452,
      "questions" : [ {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      }, {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      } ],
      "description" : "description",
      "id" : 0
    }, {
      "maxPoints" : 6.027456183070403,
      "minPoints" : 1.4658129805029452,
      "questions" : [ {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      }, {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      } ],
      "description" : "description",
      "id" : 0
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/level/{id}

(findOneLevel)

### Path parameters

id (required)

Path Parameter — format: int64

### Return type

[LevelRespDto](#LevelRespDto)

### Example data

Content-Type: application/json

    {
      "maxPoints" : 6.027456183070403,
      "minPoints" : 1.4658129805029452,
      "questions" : [ {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      }, {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      } ],
      "description" : "description",
      "id" : 0
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [LevelRespDto](#LevelRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/level/paginated

(getPaginatedLevels)

### Query parameters

page (optional)

Query Parameter — default: 0 format: int32

size (optional)

Query Parameter — default: 10 format: int32

### Return type

array\[[LevelRespDto](#LevelRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "maxPoints" : 6.027456183070403,
      "minPoints" : 1.4658129805029452,
      "questions" : [ {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      }, {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      } ],
      "description" : "description",
      "id" : 0
    }, {
      "maxPoints" : 6.027456183070403,
      "minPoints" : 1.4658129805029452,
      "questions" : [ {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      }, {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      } ],
      "description" : "description",
      "id" : 0
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    post /api/v1/level

(saveLevel)

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [LevelDto](#LevelDto) (required)

Body Parameter —

### Return type

[LevelRespDto](#LevelRespDto)

### Example data

Content-Type: application/json

    {
      "maxPoints" : 6.027456183070403,
      "minPoints" : 1.4658129805029452,
      "questions" : [ {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      }, {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      } ],
      "description" : "description",
      "id" : 0
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [LevelRespDto](#LevelRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    put /api/v1/level/{id}

(updateLevel)

### Path parameters

id (required)

Path Parameter — format: int64

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [LevelDto](#LevelDto) (required)

Body Parameter —

### Return type

[LevelRespDto](#LevelRespDto)

### Example data

Content-Type: application/json

    {
      "maxPoints" : 6.027456183070403,
      "minPoints" : 1.4658129805029452,
      "questions" : [ {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      }, {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      } ],
      "description" : "description",
      "id" : 0
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [LevelRespDto](#LevelRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

MediaController
===============

[Up](#__Methods)

    delete /api/v1/media/{id}

(deleteMedia)

### Path parameters

id (required)

Path Parameter — format: int64

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK[](#)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/media

(findAllMedias)

### Return type

array\[[MediaDto](#MediaDto)\]

### Example data

Content-Type: application/json

    [ {
      "questionId" : 3,
      "src" : "src",
      "mediaType" : "AUDIO",
      "id" : 9
    }, {
      "questionId" : 3,
      "src" : "src",
      "mediaType" : "AUDIO",
      "id" : 9
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/media/{id}

(findOneMedia)

### Path parameters

id (required)

Path Parameter — format: int64

### Return type

[MediaDto](#MediaDto)

### Example data

Content-Type: application/json

    {
      "questionId" : 3,
      "src" : "src",
      "mediaType" : "AUDIO",
      "id" : 9
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [MediaDto](#MediaDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/media/paginated

(getPaginatedMedias)

### Query parameters

page (optional)

Query Parameter — default: 0 format: int32

size (optional)

Query Parameter — default: 10 format: int32

### Return type

array\[[MediaDto](#MediaDto)\]

### Example data

Content-Type: application/json

    [ {
      "questionId" : 3,
      "src" : "src",
      "mediaType" : "AUDIO",
      "id" : 9
    }, {
      "questionId" : 3,
      "src" : "src",
      "mediaType" : "AUDIO",
      "id" : 9
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    post /api/v1/media

(saveMedia)

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [MediaDto](#MediaDto) (required)

Body Parameter —

### Return type

[MediaDto](#MediaDto)

### Example data

Content-Type: application/json

    {
      "questionId" : 3,
      "src" : "src",
      "mediaType" : "AUDIO",
      "id" : 9
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [MediaDto](#MediaDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    put /api/v1/media/{id}

(updateMedia)

### Path parameters

id (required)

Path Parameter — format: int64

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [MediaDto](#MediaDto) (required)

Body Parameter —

### Return type

[MediaDto](#MediaDto)

### Example data

Content-Type: application/json

    {
      "questionId" : 3,
      "src" : "src",
      "mediaType" : "AUDIO",
      "id" : 9
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [MediaDto](#MediaDto)

#### 400

Bad Request

#### 404

Not Found

* * *

QuestionController
==================

[Up](#__Methods)

    post /api/v1/question

(addQuestion)

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [QuestionDto](#QuestionDto) (required)

Body Parameter —

### Return type

[QuestionRespDto](#QuestionRespDto)

### Example data

Content-Type: application/json

    {
      "levelId" : 7,
      "tempQuestions" : [ {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      }, {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      } ],
      "numberOfPoints" : 5,
      "id" : 0,
      "numberOfCorrectAnswers" : 1,
      "time" : 5,
      "media" : [ {
        "questionId" : 3,
        "src" : "src",
        "mediaType" : "AUDIO",
        "id" : 9
      }, {
        "questionId" : 3,
        "src" : "src",
        "mediaType" : "AUDIO",
        "id" : 9
      } ],
      "validations" : [ {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      }, {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      } ],
      "questionType" : "OneAnswer",
      "numberOfAnswers" : 6,
      "subjectId" : 2
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [QuestionRespDto](#QuestionRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    delete /api/v1/question/{id}

(deleteQuestion)

### Path parameters

id (required)

Path Parameter — format: int64

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK[](#)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/question

(getAllQuestions)

### Return type

array\[[QuestionRespDto](#QuestionRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "levelId" : 7,
      "tempQuestions" : [ {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      }, {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      } ],
      "numberOfPoints" : 5,
      "id" : 0,
      "numberOfCorrectAnswers" : 1,
      "time" : 5,
      "media" : [ {
        "questionId" : 3,
        "src" : "src",
        "mediaType" : "AUDIO",
        "id" : 9
      }, {
        "questionId" : 3,
        "src" : "src",
        "mediaType" : "AUDIO",
        "id" : 9
      } ],
      "validations" : [ {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      }, {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      } ],
      "questionType" : "OneAnswer",
      "numberOfAnswers" : 6,
      "subjectId" : 2
    }, {
      "levelId" : 7,
      "tempQuestions" : [ {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      }, {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      } ],
      "numberOfPoints" : 5,
      "id" : 0,
      "numberOfCorrectAnswers" : 1,
      "time" : 5,
      "media" : [ {
        "questionId" : 3,
        "src" : "src",
        "mediaType" : "AUDIO",
        "id" : 9
      }, {
        "questionId" : 3,
        "src" : "src",
        "mediaType" : "AUDIO",
        "id" : 9
      } ],
      "validations" : [ {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      }, {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      } ],
      "questionType" : "OneAnswer",
      "numberOfAnswers" : 6,
      "subjectId" : 2
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/question/{id}

(getOneQuestion)

### Path parameters

id (required)

Path Parameter — format: int64

### Return type

[QuestionRespDto](#QuestionRespDto)

### Example data

Content-Type: application/json

    {
      "levelId" : 7,
      "tempQuestions" : [ {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      }, {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      } ],
      "numberOfPoints" : 5,
      "id" : 0,
      "numberOfCorrectAnswers" : 1,
      "time" : 5,
      "media" : [ {
        "questionId" : 3,
        "src" : "src",
        "mediaType" : "AUDIO",
        "id" : 9
      }, {
        "questionId" : 3,
        "src" : "src",
        "mediaType" : "AUDIO",
        "id" : 9
      } ],
      "validations" : [ {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      }, {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      } ],
      "questionType" : "OneAnswer",
      "numberOfAnswers" : 6,
      "subjectId" : 2
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [QuestionRespDto](#QuestionRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/question/paginated

(getPaginatedQuestions)

### Query parameters

page (optional)

Query Parameter — default: 0 format: int32

size (optional)

Query Parameter — default: 10 format: int32

### Return type

array\[[QuestionRespDto](#QuestionRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "levelId" : 7,
      "tempQuestions" : [ {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      }, {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      } ],
      "numberOfPoints" : 5,
      "id" : 0,
      "numberOfCorrectAnswers" : 1,
      "time" : 5,
      "media" : [ {
        "questionId" : 3,
        "src" : "src",
        "mediaType" : "AUDIO",
        "id" : 9
      }, {
        "questionId" : 3,
        "src" : "src",
        "mediaType" : "AUDIO",
        "id" : 9
      } ],
      "validations" : [ {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      }, {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      } ],
      "questionType" : "OneAnswer",
      "numberOfAnswers" : 6,
      "subjectId" : 2
    }, {
      "levelId" : 7,
      "tempQuestions" : [ {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      }, {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      } ],
      "numberOfPoints" : 5,
      "id" : 0,
      "numberOfCorrectAnswers" : 1,
      "time" : 5,
      "media" : [ {
        "questionId" : 3,
        "src" : "src",
        "mediaType" : "AUDIO",
        "id" : 9
      }, {
        "questionId" : 3,
        "src" : "src",
        "mediaType" : "AUDIO",
        "id" : 9
      } ],
      "validations" : [ {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      }, {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      } ],
      "questionType" : "OneAnswer",
      "numberOfAnswers" : 6,
      "subjectId" : 2
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    put /api/v1/question/{id}

(updateQuestion)

### Path parameters

id (required)

Path Parameter — format: int64

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [QuestionDto](#QuestionDto) (required)

Body Parameter —

### Return type

[QuestionRespDto](#QuestionRespDto)

### Example data

Content-Type: application/json

    {
      "levelId" : 7,
      "tempQuestions" : [ {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      }, {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      } ],
      "numberOfPoints" : 5,
      "id" : 0,
      "numberOfCorrectAnswers" : 1,
      "time" : 5,
      "media" : [ {
        "questionId" : 3,
        "src" : "src",
        "mediaType" : "AUDIO",
        "id" : 9
      }, {
        "questionId" : 3,
        "src" : "src",
        "mediaType" : "AUDIO",
        "id" : 9
      } ],
      "validations" : [ {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      }, {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      } ],
      "questionType" : "OneAnswer",
      "numberOfAnswers" : 6,
      "subjectId" : 2
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [QuestionRespDto](#QuestionRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

QuizController
==============

[Up](#__Methods)

    delete /api/v1/quiz/{id}

(deleteQuiz)

### Path parameters

id (required)

Path Parameter — format: int64

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK[](#)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/quiz

(findAllQuizs)

### Return type

array\[[QuizRespDto](#QuizRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "answersAccess" : true,
      "chancesNum" : 1,
      "teacher" : {
        "lastName" : "lastName",
        "firstName" : "firstName",
        "specialty" : "specialty",
        "address" : "address",
        "dateOfBirth" : "2000-01-23",
        "id" : 5
      },
      "resultAccessAfterTest" : true,
      "tempQuestions" : [ {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      }, {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      } ],
      "successResult" : 6,
      "comment" : "comment",
      "id" : 0,
      "assignQuizes" : [ {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      }, {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      } ]
    }, {
      "answersAccess" : true,
      "chancesNum" : 1,
      "teacher" : {
        "lastName" : "lastName",
        "firstName" : "firstName",
        "specialty" : "specialty",
        "address" : "address",
        "dateOfBirth" : "2000-01-23",
        "id" : 5
      },
      "resultAccessAfterTest" : true,
      "tempQuestions" : [ {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      }, {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      } ],
      "successResult" : 6,
      "comment" : "comment",
      "id" : 0,
      "assignQuizes" : [ {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      }, {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      } ]
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/quiz/{id}

(findOneQuiz)

### Path parameters

id (required)

Path Parameter — format: int64

### Return type

[QuizRespDto](#QuizRespDto)

### Example data

Content-Type: application/json

    {
      "answersAccess" : true,
      "chancesNum" : 1,
      "teacher" : {
        "lastName" : "lastName",
        "firstName" : "firstName",
        "specialty" : "specialty",
        "address" : "address",
        "dateOfBirth" : "2000-01-23",
        "id" : 5
      },
      "resultAccessAfterTest" : true,
      "tempQuestions" : [ {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      }, {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      } ],
      "successResult" : 6,
      "comment" : "comment",
      "id" : 0,
      "assignQuizes" : [ {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      }, {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      } ]
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [QuizRespDto](#QuizRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/quiz/paginated

(getPaginatedQuizs)

### Query parameters

page (optional)

Query Parameter — default: 0 format: int32

size (optional)

Query Parameter — default: 10 format: int32

### Return type

array\[[QuizRespDto](#QuizRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "answersAccess" : true,
      "chancesNum" : 1,
      "teacher" : {
        "lastName" : "lastName",
        "firstName" : "firstName",
        "specialty" : "specialty",
        "address" : "address",
        "dateOfBirth" : "2000-01-23",
        "id" : 5
      },
      "resultAccessAfterTest" : true,
      "tempQuestions" : [ {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      }, {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      } ],
      "successResult" : 6,
      "comment" : "comment",
      "id" : 0,
      "assignQuizes" : [ {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      }, {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      } ]
    }, {
      "answersAccess" : true,
      "chancesNum" : 1,
      "teacher" : {
        "lastName" : "lastName",
        "firstName" : "firstName",
        "specialty" : "specialty",
        "address" : "address",
        "dateOfBirth" : "2000-01-23",
        "id" : 5
      },
      "resultAccessAfterTest" : true,
      "tempQuestions" : [ {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      }, {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      } ],
      "successResult" : 6,
      "comment" : "comment",
      "id" : 0,
      "assignQuizes" : [ {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      }, {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      } ]
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    post /api/v1/quiz

(saveQuiz)

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [QuizDto](#QuizDto) (required)

Body Parameter —

### Return type

[QuizRespDto](#QuizRespDto)

### Example data

Content-Type: application/json

    {
      "answersAccess" : true,
      "chancesNum" : 1,
      "teacher" : {
        "lastName" : "lastName",
        "firstName" : "firstName",
        "specialty" : "specialty",
        "address" : "address",
        "dateOfBirth" : "2000-01-23",
        "id" : 5
      },
      "resultAccessAfterTest" : true,
      "tempQuestions" : [ {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      }, {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      } ],
      "successResult" : 6,
      "comment" : "comment",
      "id" : 0,
      "assignQuizes" : [ {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      }, {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      } ]
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [QuizRespDto](#QuizRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    put /api/v1/quiz/{id}

(updateQuiz)

### Path parameters

id (required)

Path Parameter — format: int64

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [QuizDto](#QuizDto) (required)

Body Parameter —

### Return type

[QuizRespDto](#QuizRespDto)

### Example data

Content-Type: application/json

    {
      "answersAccess" : true,
      "chancesNum" : 1,
      "teacher" : {
        "lastName" : "lastName",
        "firstName" : "firstName",
        "specialty" : "specialty",
        "address" : "address",
        "dateOfBirth" : "2000-01-23",
        "id" : 5
      },
      "resultAccessAfterTest" : true,
      "tempQuestions" : [ {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      }, {
        "questionId" : 1,
        "quizId" : 5,
        "id" : 0,
        "time" : 6
      } ],
      "successResult" : 6,
      "comment" : "comment",
      "id" : 0,
      "assignQuizes" : [ {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      }, {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      } ]
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [QuizRespDto](#QuizRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

ResponseController
==================

[Up](#__Methods)

    post /api/v1/response

(addResponse)

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [ResponseDto](#ResponseDto) (required)

Body Parameter —

### Return type

[ResponseRespDto](#ResponseRespDto)

### Example data

Content-Type: application/json

    {
      "response" : "response",
      "id" : 0,
      "validations" : [ {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      }, {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      } ]
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [ResponseRespDto](#ResponseRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    delete /api/v1/response/{id}

(deleteResponse)

### Path parameters

id (required)

Path Parameter — format: int64

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK[](#)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/response

(getAllResponses)

### Return type

array\[[ResponseRespDto](#ResponseRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "response" : "response",
      "id" : 0,
      "validations" : [ {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      }, {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      } ]
    }, {
      "response" : "response",
      "id" : 0,
      "validations" : [ {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      }, {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      } ]
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/response/{id}

(getOneResponse)

### Path parameters

id (required)

Path Parameter — format: int64

### Return type

[ResponseRespDto](#ResponseRespDto)

### Example data

Content-Type: application/json

    {
      "response" : "response",
      "id" : 0,
      "validations" : [ {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      }, {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      } ]
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [ResponseRespDto](#ResponseRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/response/paginated

(getPaginatedResponses)

### Query parameters

page (optional)

Query Parameter — default: 0 format: int32

size (optional)

Query Parameter — default: 10 format: int32

### Return type

array\[[ResponseRespDto](#ResponseRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "response" : "response",
      "id" : 0,
      "validations" : [ {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      }, {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      } ]
    }, {
      "response" : "response",
      "id" : 0,
      "validations" : [ {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      }, {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      } ]
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    put /api/v1/response/{id}

(updateResponse)

### Path parameters

id (required)

Path Parameter — format: int64

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [ResponseDto](#ResponseDto) (required)

Body Parameter —

### Return type

[ResponseRespDto](#ResponseRespDto)

### Example data

Content-Type: application/json

    {
      "response" : "response",
      "id" : 0,
      "validations" : [ {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      }, {
        "questionId" : 5,
        "id" : 6,
        "points" : 1.4658129805029452,
        "responseId" : 5
      } ]
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [ResponseRespDto](#ResponseRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

StudentController
=================

[Up](#__Methods)

    delete /api/v1/student/{id}

(deleteStudent)

### Path parameters

id (required)

Path Parameter — format: int64

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK[](#)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/student

(findAllStudents)

### Return type

array\[[StudentRespDto](#StudentRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "lastName" : "lastName",
      "firstName" : "firstName",
      "address" : "address",
      "registrationDate" : "2000-01-23",
      "dateOfBirth" : "2000-01-23",
      "id" : 0,
      "assignQuizzes" : [ {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      }, {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      } ]
    }, {
      "lastName" : "lastName",
      "firstName" : "firstName",
      "address" : "address",
      "registrationDate" : "2000-01-23",
      "dateOfBirth" : "2000-01-23",
      "id" : 0,
      "assignQuizzes" : [ {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      }, {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      } ]
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/student/{id}

(findOneStudent)

### Path parameters

id (required)

Path Parameter — format: int64

### Return type

[StudentRespDto](#StudentRespDto)

### Example data

Content-Type: application/json

    {
      "lastName" : "lastName",
      "firstName" : "firstName",
      "address" : "address",
      "registrationDate" : "2000-01-23",
      "dateOfBirth" : "2000-01-23",
      "id" : 0,
      "assignQuizzes" : [ {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      }, {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      } ]
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [StudentRespDto](#StudentRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/student/paginated

(getPaginatedStudents)

### Query parameters

page (optional)

Query Parameter — default: 0 format: int32

size (optional)

Query Parameter — default: 10 format: int32

### Return type

array\[[StudentRespDto](#StudentRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "lastName" : "lastName",
      "firstName" : "firstName",
      "address" : "address",
      "registrationDate" : "2000-01-23",
      "dateOfBirth" : "2000-01-23",
      "id" : 0,
      "assignQuizzes" : [ {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      }, {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      } ]
    }, {
      "lastName" : "lastName",
      "firstName" : "firstName",
      "address" : "address",
      "registrationDate" : "2000-01-23",
      "dateOfBirth" : "2000-01-23",
      "id" : 0,
      "assignQuizzes" : [ {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      }, {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      } ]
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    post /api/v1/student

(saveStudent)

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [StudentDto](#StudentDto) (required)

Body Parameter —

### Return type

[StudentRespDto](#StudentRespDto)

### Example data

Content-Type: application/json

    {
      "lastName" : "lastName",
      "firstName" : "firstName",
      "address" : "address",
      "registrationDate" : "2000-01-23",
      "dateOfBirth" : "2000-01-23",
      "id" : 0,
      "assignQuizzes" : [ {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      }, {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      } ]
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [StudentRespDto](#StudentRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    put /api/v1/student/{id}

(updateStudent)

### Path parameters

id (required)

Path Parameter — format: int64

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [StudentDto](#StudentDto) (required)

Body Parameter —

### Return type

[StudentRespDto](#StudentRespDto)

### Example data

Content-Type: application/json

    {
      "lastName" : "lastName",
      "firstName" : "firstName",
      "address" : "address",
      "registrationDate" : "2000-01-23",
      "dateOfBirth" : "2000-01-23",
      "id" : 0,
      "assignQuizzes" : [ {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      }, {
        "date" : "2000-01-23",
        "studentId" : 2,
        "score" : 1,
        "chanceNumber" : 5,
        "notes" : "notes",
        "quizId" : 5,
        "id" : 6
      } ]
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [StudentRespDto](#StudentRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

SubjectController
=================

[Up](#__Methods)

    post /api/v1/subjects

(addSubject)

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [SubjectDto](#SubjectDto) (required)

Body Parameter —

### Return type

[SubjectRespDto](#SubjectRespDto)

### Example data

Content-Type: application/json

    {
      "parentSubjectId" : 6,
      "questions" : [ {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      }, {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      } ],
      "id" : 0,
      "title" : "title",
      "childrenSubject" : [ {
        "parentSubjectId" : 4,
        "id" : 2,
        "title" : "title"
      }, {
        "parentSubjectId" : 4,
        "id" : 2,
        "title" : "title"
      } ]
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [SubjectRespDto](#SubjectRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    delete /api/v1/subjects/{id}

(deleteSubject)

### Path parameters

id (required)

Path Parameter — format: int64

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK[](#)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/subjects

(getAllSubjects)

### Return type

array\[[SubjectRespDto](#SubjectRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "parentSubjectId" : 6,
      "questions" : [ {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      }, {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      } ],
      "id" : 0,
      "title" : "title",
      "childrenSubject" : [ {
        "parentSubjectId" : 4,
        "id" : 2,
        "title" : "title"
      }, {
        "parentSubjectId" : 4,
        "id" : 2,
        "title" : "title"
      } ]
    }, {
      "parentSubjectId" : 6,
      "questions" : [ {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      }, {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      } ],
      "id" : 0,
      "title" : "title",
      "childrenSubject" : [ {
        "parentSubjectId" : 4,
        "id" : 2,
        "title" : "title"
      }, {
        "parentSubjectId" : 4,
        "id" : 2,
        "title" : "title"
      } ]
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/subjects/{id}

(getOneSubject)

### Path parameters

id (required)

Path Parameter — format: int64

### Return type

[SubjectRespDto](#SubjectRespDto)

### Example data

Content-Type: application/json

    {
      "parentSubjectId" : 6,
      "questions" : [ {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      }, {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      } ],
      "id" : 0,
      "title" : "title",
      "childrenSubject" : [ {
        "parentSubjectId" : 4,
        "id" : 2,
        "title" : "title"
      }, {
        "parentSubjectId" : 4,
        "id" : 2,
        "title" : "title"
      } ]
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [SubjectRespDto](#SubjectRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/subjects/paginated

(getPaginatedSubjects)

### Query parameters

page (optional)

Query Parameter — default: 0 format: int32

size (optional)

Query Parameter — default: 10 format: int32

### Return type

array\[[SubjectRespDto](#SubjectRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "parentSubjectId" : 6,
      "questions" : [ {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      }, {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      } ],
      "id" : 0,
      "title" : "title",
      "childrenSubject" : [ {
        "parentSubjectId" : 4,
        "id" : 2,
        "title" : "title"
      }, {
        "parentSubjectId" : 4,
        "id" : 2,
        "title" : "title"
      } ]
    }, {
      "parentSubjectId" : 6,
      "questions" : [ {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      }, {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      } ],
      "id" : 0,
      "title" : "title",
      "childrenSubject" : [ {
        "parentSubjectId" : 4,
        "id" : 2,
        "title" : "title"
      }, {
        "parentSubjectId" : 4,
        "id" : 2,
        "title" : "title"
      } ]
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    put /api/v1/subjects/{id}

(updateSubject)

### Path parameters

id (required)

Path Parameter — format: int64

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [SubjectDto](#SubjectDto) (required)

Body Parameter —

### Return type

[SubjectRespDto](#SubjectRespDto)

### Example data

Content-Type: application/json

    {
      "parentSubjectId" : 6,
      "questions" : [ {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      }, {
        "levelId" : 3,
        "numberOfPoints" : 2,
        "id" : 1,
        "numberOfCorrectAnswers" : 5,
        "time" : 7,
        "questionType" : "OneAnswer",
        "numberOfAnswers" : 5,
        "subjectId" : 9
      } ],
      "id" : 0,
      "title" : "title",
      "childrenSubject" : [ {
        "parentSubjectId" : 4,
        "id" : 2,
        "title" : "title"
      }, {
        "parentSubjectId" : 4,
        "id" : 2,
        "title" : "title"
      } ]
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [SubjectRespDto](#SubjectRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

TeacherController
=================

[Up](#__Methods)

    delete /api/v1/teacher/{id}

(deleteTeacher)

### Path parameters

id (required)

Path Parameter — format: int64

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK[](#)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/teacher

(findAllTeachers)

### Return type

array\[[TeacherRespDto](#TeacherRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "lastName" : "lastName",
      "firstName" : "firstName",
      "specialty" : "specialty",
      "address" : "address",
      "dateOfBirth" : "2000-01-23",
      "id" : 0,
      "quizzes" : [ {
        "answersAccess" : true,
        "chancesNum" : 5,
        "teacherId" : 5,
        "resultAccessAfterTest" : true,
        "successResult" : 1,
        "comment" : "comment",
        "id" : 6
      }, {
        "answersAccess" : true,
        "chancesNum" : 5,
        "teacherId" : 5,
        "resultAccessAfterTest" : true,
        "successResult" : 1,
        "comment" : "comment",
        "id" : 6
      } ]
    }, {
      "lastName" : "lastName",
      "firstName" : "firstName",
      "specialty" : "specialty",
      "address" : "address",
      "dateOfBirth" : "2000-01-23",
      "id" : 0,
      "quizzes" : [ {
        "answersAccess" : true,
        "chancesNum" : 5,
        "teacherId" : 5,
        "resultAccessAfterTest" : true,
        "successResult" : 1,
        "comment" : "comment",
        "id" : 6
      }, {
        "answersAccess" : true,
        "chancesNum" : 5,
        "teacherId" : 5,
        "resultAccessAfterTest" : true,
        "successResult" : 1,
        "comment" : "comment",
        "id" : 6
      } ]
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/teacher/{id}

(findOneTeacher)

### Path parameters

id (required)

Path Parameter — format: int64

### Return type

[TeacherRespDto](#TeacherRespDto)

### Example data

Content-Type: application/json

    {
      "lastName" : "lastName",
      "firstName" : "firstName",
      "specialty" : "specialty",
      "address" : "address",
      "dateOfBirth" : "2000-01-23",
      "id" : 0,
      "quizzes" : [ {
        "answersAccess" : true,
        "chancesNum" : 5,
        "teacherId" : 5,
        "resultAccessAfterTest" : true,
        "successResult" : 1,
        "comment" : "comment",
        "id" : 6
      }, {
        "answersAccess" : true,
        "chancesNum" : 5,
        "teacherId" : 5,
        "resultAccessAfterTest" : true,
        "successResult" : 1,
        "comment" : "comment",
        "id" : 6
      } ]
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [TeacherRespDto](#TeacherRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/teacher/paginated

(getPaginatedTeachers)

### Query parameters

page (optional)

Query Parameter — default: 0 format: int32

size (optional)

Query Parameter — default: 10 format: int32

### Return type

array\[[TeacherRespDto](#TeacherRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "lastName" : "lastName",
      "firstName" : "firstName",
      "specialty" : "specialty",
      "address" : "address",
      "dateOfBirth" : "2000-01-23",
      "id" : 0,
      "quizzes" : [ {
        "answersAccess" : true,
        "chancesNum" : 5,
        "teacherId" : 5,
        "resultAccessAfterTest" : true,
        "successResult" : 1,
        "comment" : "comment",
        "id" : 6
      }, {
        "answersAccess" : true,
        "chancesNum" : 5,
        "teacherId" : 5,
        "resultAccessAfterTest" : true,
        "successResult" : 1,
        "comment" : "comment",
        "id" : 6
      } ]
    }, {
      "lastName" : "lastName",
      "firstName" : "firstName",
      "specialty" : "specialty",
      "address" : "address",
      "dateOfBirth" : "2000-01-23",
      "id" : 0,
      "quizzes" : [ {
        "answersAccess" : true,
        "chancesNum" : 5,
        "teacherId" : 5,
        "resultAccessAfterTest" : true,
        "successResult" : 1,
        "comment" : "comment",
        "id" : 6
      }, {
        "answersAccess" : true,
        "chancesNum" : 5,
        "teacherId" : 5,
        "resultAccessAfterTest" : true,
        "successResult" : 1,
        "comment" : "comment",
        "id" : 6
      } ]
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    post /api/v1/teacher

(saveTeacher)

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [TeacherDto](#TeacherDto) (required)

Body Parameter —

### Return type

[TeacherRespDto](#TeacherRespDto)

### Example data

Content-Type: application/json

    {
      "lastName" : "lastName",
      "firstName" : "firstName",
      "specialty" : "specialty",
      "address" : "address",
      "dateOfBirth" : "2000-01-23",
      "id" : 0,
      "quizzes" : [ {
        "answersAccess" : true,
        "chancesNum" : 5,
        "teacherId" : 5,
        "resultAccessAfterTest" : true,
        "successResult" : 1,
        "comment" : "comment",
        "id" : 6
      }, {
        "answersAccess" : true,
        "chancesNum" : 5,
        "teacherId" : 5,
        "resultAccessAfterTest" : true,
        "successResult" : 1,
        "comment" : "comment",
        "id" : 6
      } ]
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [TeacherRespDto](#TeacherRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    put /api/v1/teacher/{id}

(updateTeacher)

### Path parameters

id (required)

Path Parameter — format: int64

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [TeacherDto](#TeacherDto) (required)

Body Parameter —

### Return type

[TeacherRespDto](#TeacherRespDto)

### Example data

Content-Type: application/json

    {
      "lastName" : "lastName",
      "firstName" : "firstName",
      "specialty" : "specialty",
      "address" : "address",
      "dateOfBirth" : "2000-01-23",
      "id" : 0,
      "quizzes" : [ {
        "answersAccess" : true,
        "chancesNum" : 5,
        "teacherId" : 5,
        "resultAccessAfterTest" : true,
        "successResult" : 1,
        "comment" : "comment",
        "id" : 6
      }, {
        "answersAccess" : true,
        "chancesNum" : 5,
        "teacherId" : 5,
        "resultAccessAfterTest" : true,
        "successResult" : 1,
        "comment" : "comment",
        "id" : 6
      } ]
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [TeacherRespDto](#TeacherRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

TempQuestionController
======================

[Up](#__Methods)

    delete /api/v1/tempQuestion/{id}

(deleteTempQuestion)

### Path parameters

id (required)

Path Parameter — format: int64

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK[](#)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/tempQuestion

(findAllTempQuestions)

### Return type

array\[[TempQuestionDto](#TempQuestionDto)\]

### Example data

Content-Type: application/json

    [ {
      "questionId" : 1,
      "quizId" : 5,
      "id" : 0,
      "time" : 6
    }, {
      "questionId" : 1,
      "quizId" : 5,
      "id" : 0,
      "time" : 6
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/tempQuestion/{id}

(findOneTempQuestion)

### Path parameters

id (required)

Path Parameter — format: int64

### Return type

[TempQuestionDto](#TempQuestionDto)

### Example data

Content-Type: application/json

    {
      "questionId" : 1,
      "quizId" : 5,
      "id" : 0,
      "time" : 6
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [TempQuestionDto](#TempQuestionDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/tempQuestion/paginated

(getPaginatedTempQuestions)

### Query parameters

page (optional)

Query Parameter — default: 0 format: int32

size (optional)

Query Parameter — default: 10 format: int32

### Return type

array\[[TempQuestionDto](#TempQuestionDto)\]

### Example data

Content-Type: application/json

    [ {
      "questionId" : 1,
      "quizId" : 5,
      "id" : 0,
      "time" : 6
    }, {
      "questionId" : 1,
      "quizId" : 5,
      "id" : 0,
      "time" : 6
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    post /api/v1/tempQuestion

(saveTempQuestion)

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [TempQuestionDto](#TempQuestionDto) (required)

Body Parameter —

### Return type

[TempQuestionDto](#TempQuestionDto)

### Example data

Content-Type: application/json

    {
      "questionId" : 1,
      "quizId" : 5,
      "id" : 0,
      "time" : 6
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [TempQuestionDto](#TempQuestionDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    put /api/v1/tempQuestion/{id}

(updateTempQuestion)

### Path parameters

id (required)

Path Parameter — format: int64

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [TempQuestionDto](#TempQuestionDto) (required)

Body Parameter —

### Return type

[TempQuestionDto](#TempQuestionDto)

### Example data

Content-Type: application/json

    {
      "questionId" : 1,
      "quizId" : 5,
      "id" : 0,
      "time" : 6
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [TempQuestionDto](#TempQuestionDto)

#### 400

Bad Request

#### 404

Not Found

* * *

ValidationController
====================

[Up](#__Methods)

    delete /api/v1/validation/{id}

(deleteValidation)

### Path parameters

id (required)

Path Parameter — format: int64

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK[](#)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/validation

(findAllValidations)

### Return type

array\[[ValidationRespDto](#ValidationRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "questionId" : 1,
      "answers" : [ {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      }, {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      } ],
      "id" : 0,
      "points" : 6.027456183070403,
      "responseId" : 5
    }, {
      "questionId" : 1,
      "answers" : [ {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      }, {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      } ],
      "id" : 0,
      "points" : 6.027456183070403,
      "responseId" : 5
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/validation/{id}

(findOneValidation)

### Path parameters

id (required)

Path Parameter — format: int64

### Return type

[ValidationRespDto](#ValidationRespDto)

### Example data

Content-Type: application/json

    {
      "questionId" : 1,
      "answers" : [ {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      }, {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      } ],
      "id" : 0,
      "points" : 6.027456183070403,
      "responseId" : 5
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [ValidationRespDto](#ValidationRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    get /api/v1/validation/paginated

(getPaginatedValidations)

### Query parameters

page (optional)

Query Parameter — default: 0 format: int32

size (optional)

Query Parameter — default: 10 format: int32

### Return type

array\[[ValidationRespDto](#ValidationRespDto)\]

### Example data

Content-Type: application/json

    [ {
      "questionId" : 1,
      "answers" : [ {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      }, {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      } ],
      "id" : 0,
      "points" : 6.027456183070403,
      "responseId" : 5
    }, {
      "questionId" : 1,
      "answers" : [ {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      }, {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      } ],
      "id" : 0,
      "points" : 6.027456183070403,
      "responseId" : 5
    } ]

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    post /api/v1/validation

(saveValidation)

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [ValidationDto](#ValidationDto) (required)

Body Parameter —

### Return type

[ValidationRespDto](#ValidationRespDto)

### Example data

Content-Type: application/json

    {
      "questionId" : 1,
      "answers" : [ {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      }, {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      } ],
      "id" : 0,
      "points" : 6.027456183070403,
      "responseId" : 5
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [ValidationRespDto](#ValidationRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

[Up](#__Methods)

    put /api/v1/validation/{id}

(updateValidation)

### Path parameters

id (required)

Path Parameter — format: int64

### Consumes

This API call consumes the following media types via the Content-Type request header:

* `application/json`

### Request body

body [ValidationDto](#ValidationDto) (required)

Body Parameter —

### Return type

[ValidationRespDto](#ValidationRespDto)

### Example data

Content-Type: application/json

    {
      "questionId" : 1,
      "answers" : [ {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      }, {
        "validationId" : 7,
        "assignQuizId" : 9,
        "id" : 5,
        "played" : 2
      } ],
      "id" : 0,
      "points" : 6.027456183070403,
      "responseId" : 5
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed
by the Content-Type response header.

* `*/*`

### Responses

#### 200

OK [ValidationRespDto](#ValidationRespDto)

#### 400

Bad Request

#### 404

Not Found

* * *

Models
------

\[ Jump to [Methods](#__Methods) \]

### Table of Contents

1. [`AnswerDto`](#AnswerDto)
2. [`AssignQuizDto`](#AssignQuizDto)
3. [`AssignQuizRespDto`](#AssignQuizRespDto)
4. [`LevelDto`](#LevelDto)
5. [`LevelRespDto`](#LevelRespDto)
6. [`MediaDto`](#MediaDto)
7. [`QuestionDto`](#QuestionDto)
8. [`QuestionRespDto`](#QuestionRespDto)
9. [`QuizDto`](#QuizDto)
10. [`QuizRespDto`](#QuizRespDto)
11. [`ResponseDto`](#ResponseDto)
12. [`ResponseRespDto`](#ResponseRespDto)
13. [`StudentDto`](#StudentDto)
14. [`StudentRespDto`](#StudentRespDto)
15. [`SubjectDto`](#SubjectDto)
16. [`SubjectRespDto`](#SubjectRespDto)
17. [`TeacherDto`](#TeacherDto)
18. [`TeacherRespDto`](#TeacherRespDto)
19. [`TempQuestionDto`](#TempQuestionDto)
20. [`ValidationDto`](#ValidationDto)
21. [`ValidationRespDto`](#ValidationRespDto)

### `AnswerDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

played (optional)

[Integer](#integer) format: int32

validationId (optional)

[Long](#long) format: int64

assignQuizId (optional)

[Long](#long) format: int64

### `AssignQuizDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

score (optional)

[Integer](#integer) format: int32

chanceNumber (optional)

[Integer](#integer) format: int32

notes (optional)

[String](#string)

date (optional)

[date](#date) format: date

quizId (optional)

[Long](#long) format: int64

studentId (optional)

[Long](#long) format: int64

### `AssignQuizRespDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

score (optional)

[Integer](#integer) format: int32

chanceNumber (optional)

[Integer](#integer) format: int32

notes (optional)

[String](#string)

date (optional)

[date](#date) format: date

quizId (optional)

[Long](#long) format: int64

studentId (optional)

[Long](#long) format: int64

answers (optional)

[array\[AnswerDto\]](#AnswerDto)

### `LevelDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

description

[String](#string)

maxPoints (optional)

[Double](#double) format: double

minPoints (optional)

[Double](#double) format: double

### `LevelRespDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

description (optional)

[String](#string)

maxPoints (optional)

[Double](#double) format: double

minPoints (optional)

[Double](#double) format: double

questions (optional)

[array\[QuestionDto\]](#QuestionDto)

### `MediaDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

src (optional)

[String](#string)

mediaType (optional)

[String](#string)

Enum:

AUDIO

VIDEO

IMAGE

DOCUMENT

questionId (optional)

[Long](#long) format: int64

### `QuestionDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

numberOfAnswers (optional)

[Integer](#integer) format: int32

numberOfCorrectAnswers (optional)

[Integer](#integer) format: int32

questionType (optional)

[String](#string)

Enum:

OneAnswer

MulipleAnswer

TrueFalse

numberOfPoints (optional)

[Integer](#integer) format: int32

time (optional)

[Integer](#integer) format: int32

subjectId (optional)

[Long](#long) format: int64

levelId (optional)

[Long](#long) format: int64

### `QuestionRespDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

numberOfAnswers (optional)

[Integer](#integer) format: int32

numberOfCorrectAnswers (optional)

[Integer](#integer) format: int32

questionType (optional)

[String](#string)

Enum:

OneAnswer

MulipleAnswer

TrueFalse

numberOfPoints (optional)

[Integer](#integer) format: int32

time (optional)

[Integer](#integer) format: int32

subjectId (optional)

[Long](#long) format: int64

levelId (optional)

[Long](#long) format: int64

media (optional)

[array\[MediaDto\]](#MediaDto)

validations (optional)

[array\[ValidationDto\]](#ValidationDto)

tempQuestions (optional)

[array\[TempQuestionDto\]](#TempQuestionDto)

### `QuizDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

successResult (optional)

[Integer](#integer) format: int32

answersAccess (optional)

[Boolean](#boolean)

resultAccessAfterTest (optional)

[Boolean](#boolean)

chancesNum (optional)

[Integer](#integer) format: int32

comment (optional)

[String](#string)

teacherId (optional)

[Long](#long) format: int64

### `QuizRespDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

successResult (optional)

[Integer](#integer) format: int32

answersAccess (optional)

[Boolean](#boolean)

resultAccessAfterTest (optional)

[Boolean](#boolean)

chancesNum (optional)

[Integer](#integer) format: int32

comment (optional)

[String](#string)

teacher (optional)

[TeacherDto](#TeacherDto)

assignQuizes (optional)

[array\[AssignQuizDto\]](#AssignQuizDto)

tempQuestions (optional)

[array\[TempQuestionDto\]](#TempQuestionDto)

### `ResponseDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

response

[String](#string)

### `ResponseRespDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

response (optional)

[String](#string)

validations (optional)

[array\[ValidationDto\]](#ValidationDto)

### `StudentDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

lastName (optional)

[String](#string)

firstName (optional)

[String](#string)

dateOfBirth (optional)

[date](#date) format: date

address (optional)

[String](#string)

registrationDate (optional)

[date](#date) format: date

### `StudentRespDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

lastName (optional)

[String](#string)

firstName (optional)

[String](#string)

dateOfBirth (optional)

[date](#date) format: date

address (optional)

[String](#string)

registrationDate (optional)

[date](#date) format: date

assignQuizzes (optional)

[array\[AssignQuizDto\]](#AssignQuizDto)

### `SubjectDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

title

[String](#string)

parentSubjectId (optional)

[Long](#long) format: int64

### `SubjectRespDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

title (optional)

[String](#string)

parentSubjectId (optional)

[Long](#long) format: int64

questions (optional)

[array\[QuestionDto\]](#QuestionDto)

childrenSubject (optional)

[array\[SubjectDto\]](#SubjectDto)

### `TeacherDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

lastName (optional)

[String](#string)

firstName (optional)

[String](#string)

dateOfBirth (optional)

[date](#date) format: date

address (optional)

[String](#string)

specialty

[String](#string)

### `TeacherRespDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

lastName (optional)

[String](#string)

firstName (optional)

[String](#string)

dateOfBirth (optional)

[date](#date) format: date

address (optional)

[String](#string)

specialty (optional)

[String](#string)

quizzes (optional)

[array\[QuizDto\]](#QuizDto)

### `TempQuestionDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

time (optional)

[Integer](#integer) format: int32

questionId (optional)

[Long](#long) format: int64

quizId (optional)

[Long](#long) format: int64

### `ValidationDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

points (optional)

[Double](#double) format: double

questionId (optional)

[Long](#long) format: int64

responseId (optional)

[Long](#long) format: int64

### `ValidationRespDto` [Up](#__Models)

id (optional)

[Long](#long) format: int64

points (optional)

[Double](#double) format: double

questionId (optional)

[Long](#long) format: int64

responseId (optional)

[Long](#long) format: int64

answers (optional)

[array\[AnswerDto\]](#AnswerDto)