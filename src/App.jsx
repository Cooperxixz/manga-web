import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

const categories = [
  "แอ็กชัน",
  "โรแมนติก",
  "คอมเมดี้",
  "ดราม่า",
  "แฟนตาซี",
  "สยองขวัญ",
];

const recommendations = {
  แอ็กชัน: ["เรื่อง A1", "เรื่อง A2", "เรื่อง A3"],
  โรแมนติก: ["เรื่อง R1", "เรื่อง R2", "เรื่อง R3"],
  คอมเมดี้: ["เรื่อง C1", "เรื่อง C2", "เรื่อง C3"],
  ดราม่า: ["เรื่อง D1", "เรื่อง D2", "เรื่อง D3"],
  แฟนตาซี: ["เรื่อง F1", "เรื่อง F2", "เรื่อง F3"],
  สยองขวัญ: ["เรื่อง H1", "เรื่อง H2", "เรื่อง H3"],
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {!selectedCategory ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {categories.map((cat) => (
            <Card
              key={cat}
              className="cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedCategory(cat)}
            >
              <CardContent className="p-6 text-center font-semibold text-lg">
                {cat}
              </CardContent>
            </Card>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-2xl mx-auto"
        >
          <Button className="mb-4" onClick={() => setSelectedCategory(null)}>
            ← กลับไปเลือกหมวดหมู่
          </Button>
          <h2 className="text-2xl font-bold mb-4">แนะนำหมวด: {selectedCategory}</h2>
          <div className="grid gap-3">
            {recommendations[selectedCategory].map((title, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-4 text-lg font-medium">
                  {title}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
