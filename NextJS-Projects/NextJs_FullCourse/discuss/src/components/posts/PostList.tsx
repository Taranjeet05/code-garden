import React from "react";
import { Card, CardHeader, CardTitle,CardDescription } from "../ui/card";

const PostList = () => {
  return (
    <div className="flex flex-col gap-2">
      {[1,2].map((post, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{'TypeScript'}</CardTitle>
            <CardDescription className="flex items-center justify-between">
              <h1>By TaranjeetSingh</h1>
              <h1>0 comments</h1>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
