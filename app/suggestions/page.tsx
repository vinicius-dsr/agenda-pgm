import SuggestionForm from "@/components/SuggestionForm";

export default function SuggestionsPage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-10 md:mb-8 md:px-0">
      <div className="flex flex-col items-center gap-4">
        <h2 className="flex items-center gap-4 text-center text-xl font-medium text-primary md:text-2xl">
          Caixa de sugestões
        </h2>
        <span className="max-w-[650px] flex-wrap text-center text-base md:text-lg">
          Não encontrou o estabelecimento que você estava procurando ou tem
          alguma diga para melhoramos nosso site ? Nos fale um pouco mais...
        </span>
      </div>
      <SuggestionForm />
    </div>
  );
}
