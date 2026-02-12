"""
openai_codex_demo.py

在终端里运行这个文件，可以用 OpenAI 的最新代码模型来生成代码。

使用前准备：
1. 安装依赖：   pip install --upgrade openai
2. 设置环境变量：export OPENAI_API_KEY="你的 API Key"
3. 运行示例：   python openai_codex_demo.py
"""

from openai import OpenAI


def main() -> None:
    """
    向 OpenAI 的代码模型发一个简单请求，请它生成 Python 代码。
    """
    client = OpenAI()

    # 提示词：请模型只返回纯代码，方便直接复制使用
    prompt = "写一个 Python 函数 reverse_str(s: str) -> str，实现字符串反转。只输出代码，不要解释。"

    # 你可以把 model 换成当前账号可用的任意支持代码生成的模型
    # 例如："gpt-4.1"、"gpt-4.1-mini" 等
    response = client.responses.create(
        model="gpt-4.1",
        instructions="你是一个只返回代码的资深 Python 工程师。",
        input=prompt,
    )

    # output_text 会自动把多段输出拼成一段字符串
    code = response.output_text

    print("=== OpenAI 生成的代码 ===\n")
    print(code)


if __name__ == "__main__":
    main()

