import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SubscribeProps {
  subscriberCount?: number;
}

export default function Subscribe({ subscriberCount = 0 }: SubscribeProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="border-2 border-[#ff5919]/20">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-serif font-medium">
                订阅我的 Newsletter
              </h2>
              <p className="text-muted-foreground">
                每周分享有趣的技术见解和生活思考。
                {subscriberCount > 0 && ` 目前已有 ${subscriberCount} 位订阅者`}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Button className="bg-[#ff5919] hover:bg-[#ff5919]/90 text-white">
                  免费订阅
                </Button>
                <Button variant="outline">
                  付费订阅 ¥9/月
                </Button>
              </div>

              <p className="text-xs text-muted-foreground pt-2">
                随时可取消订阅，无风险
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
