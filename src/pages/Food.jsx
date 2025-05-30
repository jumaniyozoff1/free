import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  Image,
  Typography,
  Tag,
  Spin,
  Alert,
  Divider,
  Button,
} from "antd";
import { YoutubeOutlined, LinkOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Food = () => {
  const { foodName } = useParams();
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
      .then((res) => {
        setFood(res.data.meals || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Ma'lumotni olishda xatolik yuz berdi");
        setLoading(false);
      });
  }, [foodName]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {food.map((meal) => {
        const {
          idMeal,
          strMeal,
          strMealThumb,
          strCategory,
          strArea,
          strInstructions,
          strYoutube,
          strSource,
        } = meal;

        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = meal[`strIngredient${i}`];
          const measure = meal[`strMeasure${i}`];
          if (
            ingredient &&
            ingredient.trim() !== "" &&
            measure &&
            measure.trim() !== ""
          ) {
            ingredients.push(`${measure} ${ingredient}`);
          }
        }

        return (
          <Card
            key={idMeal}
            hoverable
            style={{ maxWidth: 800, borderRadius: 16, width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              {/* Chap tomonda rasm */}
              <div style={{ flex: "1 1 250px", minWidth: 250 }}>
                <Image
                  alt={strMeal}
                  src={strMealThumb}
                  preview={false}
                  style={{ borderRadius: 12, width: "100%" }}
                />
              </div>

              {/* O‘ng tomonda matn */}
              <div style={{ flex: "2 1 400px", minWidth: 300 }}>
                <Title level={3}>{strMeal}</Title>
                <Tag color="magenta">{strCategory}</Tag>
                <Tag color="cyan">{strArea}</Tag>

                <Divider />

                <Title level={5}>Ingredients:</Title>
                <ul style={{ paddingLeft: 20 }}>
                  {ingredients.map((item, index) => (
                    <li key={index}>
                      <Paragraph style={{ marginBottom: 4 }}>{item}</Paragraph>
                    </li>
                  ))}
                </ul>

                <Divider />

                <Title level={5}>Instructions:</Title>
                <Paragraph style={{ maxHeight: 120, overflow: "auto" }}>
                  {strInstructions}
                </Paragraph>

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    marginTop: 16,
                  }}
                >
                  {strYoutube && (
                    <Button
                      type="primary"
                      icon={<YoutubeOutlined />}
                      href={strYoutube}
                      target="_blank"
                    >
                      Watch Video
                    </Button>
                  )}
                  {strSource && (
                    <Button
                      icon={<LinkOutlined />}
                      href={strSource}
                      target="_blank"
                    >
                      Source
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Food;
