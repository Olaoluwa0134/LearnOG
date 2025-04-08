import {
  Box,
  Button,
  FormControlLabel,
  Grid2,
  LinearProgress,
  Radio,
  RadioGroup,
  Typography,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Container,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import React, { useEffect, useState } from "react";
import MainBar from "./MainBar";
import { useLocation, useParams } from "react-router";

const categoryMap = {
  mathematics: 19,
  science: 17,
  history: 23,
  geography: 22,
  sports: 21,
  entertainment: 11,
  art: 25,
  animals: 27,
  politics: 24,
  "general-knowledge": 9,
};

const QuizPage = () => {
  const [questions, setQuestions] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const { category } = useParams();
  const location = useLocation();
  const { selectedItem } = location.state || {};
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://opentdb.com/api.php?amount=10&category=${categoryMap[category]}&difficulty=medium&type=multiple`;
      console.log("Fetching data from:", url);
      console.log("Category:", category);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        const shuffledQuestions = json.results.map((question) => {
          const allAnswers = [
            ...question.incorrect_answers,
            question.correct_answer,
          ].sort(() => Math.random() - 0.5);
          return { ...question, shuffledAnswers: allAnswers };
        });
        setQuestions(shuffledQuestions);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [category]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions?.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct_answer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
    console.log("Quiz submitted with answers:", selectedAnswers);
  };

  const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const renderQuestion = () => {
    if (!questions || !questions[currentQuestionIndex])
      return <LinearProgress />;

    const currentQuestion = questions[currentQuestionIndex];
    const allAnswers = currentQuestion.shuffledAnswers;

    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Question {currentQuestionIndex + 1} of {questions.length}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {decodeHtml(currentQuestion.question)}
        </Typography>
        <RadioGroup
          aria-labelledby="options-to-the-question"
          name="choices"
          sx={{ paddingLeft: 4 }}
        >
          {allAnswers.map((answer, index) => (
            <FormControlLabel
              value={answer}
              control={<Radio />}
              label={decodeHtml(answer)}
              key={index}
              onClick={() => handleAnswerSelect(answer)}
              checked={selectedAnswers[currentQuestionIndex] === answer}
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: "1rem",
                  fontWeight: "bold",
                },
              }}
            />
          ))}
        </RadioGroup>
      </Box>
    );
  };

  const renderResults = () => {
    return (
      <Dialog
        open={showResults}
        onClose={() => setShowResults(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h5" align="center" color="primary">
            Quiz Results: {score} / {questions?.length}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            Here's how you did:
          </Typography>
          <List>
            {questions?.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correct_answer;
              return (
                <ListItem key={index}>
                  <ListItemIcon>
                    {isCorrect ? (
                      <CheckCircleIcon color="success" />
                    ) : (
                      <CancelIcon color="error" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={decodeHtml(question.question)}
                    secondary={
                      <>
                        <Typography variant="body2" color="textSecondary">
                          Your answer:{" "}
                          {decodeHtml(userAnswer || "Not answered")}
                        </Typography>
                        {!isCorrect && (
                          <Typography variant="body2" color="textSecondary">
                            Correct answer:{" "}
                            {decodeHtml(question.correct_answer)}
                          </Typography>
                        )}
                      </>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setShowResults(false);
                setCurrentQuestionIndex(0);
                setSelectedAnswers({});
                setQuestions(null);
              }}
            >
              Try Again
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <Grid2 container spacing={2} sx={{ height: "100vh" }}>
      <Grid2 container>{!isMobile && <MainBar />}</Grid2>
      <Grid2 size={isMobile ? 12 : 8} sx={{ paddingTop: 1 }}>
        <Container maxWidth="md" sx={{ margin: "0 auto" }}>
          <Typography variant="h4" gutterBottom>
            {selectedItem?.title}
          </Typography>
          {renderQuestion()}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Button
              variant="contained"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>
            {currentQuestionIndex === questions?.length - 1 ? (
              <Button
                variant="contained"
                color="success"
                onClick={handleSubmit}
                disabled={!selectedAnswers[currentQuestionIndex]}
              >
                Submit
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={!selectedAnswers[currentQuestionIndex]}
              >
                Next
              </Button>
            )}
          </Box>
          {renderResults()}
        </Container>
      </Grid2>
    </Grid2>
  );
};

export default QuizPage;
