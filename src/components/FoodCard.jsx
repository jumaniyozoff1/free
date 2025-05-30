import React from "react";
import { Card, Image, Typography, Tag, Button, Divider } from "antd";
import { YoutubeOutlined, LinkOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const FoodCard = ({ meal }) => {
  const {
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
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <Card
      hoverable
      style={{ maxWidth: 500, margin: "auto", borderRadius: 16 }}
      cover={<Image alt={strMeal} src={strMealThumb} preview={false} />}
    >
      <Title level={3}>{strMeal.trim()}</Title>

      <Tag color="volcano">{strCategory}</Tag>
      <Tag color="geekblue">{strArea}</Tag>

      <Divider />

      <Title level={5}>Ingredients:</Title>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            <Paragraph style={{ marginBottom: 0 }}>{item}</Paragraph>
          </li>
        ))}
      </ul>

      <Divider />

      <Title level={5}>Instructions:</Title>
      <Paragraph>{strInstructions}</Paragraph>

      <div style={{ display: "flex", gap: "10px", marginTop: 16 }}>
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
          <Button icon={<LinkOutlined />} href={strSource} target="_blank">
            Source
          </Button>
        )}
      </div>
    </Card>
  );
};

export default FoodCard;
