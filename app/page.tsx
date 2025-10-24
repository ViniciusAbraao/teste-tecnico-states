"use client" // Habilita o modo client-side do Next.js

// Importa hooks e componentes utilizados na página
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  ThumbsUp,
  ThumbsDown,
  Share,
  MoreHorizontal,
  Bell,
  ChevronDown,
  ChevronUp,
  Search,
  Mic,
  Video,
  Grid3x3,
  BellIcon,
  Menu,
} from "lucide-react"
import { PricingCard } from "@/components/PricingCard"

// Lista de comentários exibidos na página
const comments = [
  {
    usuario: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    tempo: "1 day ago",
    texto: "My mom has been using this for 3 months and the difference is incredible! 😍",
    likes: 234,
    replies: [],
  },
  {
    usuario: "Michael Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    tempo: "2 days ago",
    texto: "I was skeptical at first, but after trying it for 2 weeks, I lost 12 pounds! This really works!",
    likes: 189,
    replies: [
      {
        usuario: "Dr. Martha Thompson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Martha",
        tempo: "2 days ago",
        texto: "Thank you for sharing your experience! Keep up the great work! 💪",
        likes: 45,
      },
    ],
  },
  {
    usuario: "Emma Rodriguez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    tempo: "3 days ago",
    texto: "This is exactly what I needed! Already ordered the ingredients. Can't wait to start!",
    likes: 156,
    replies: [],
  },
  {
    usuario: "James Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    tempo: "4 days ago",
    texto:
      "I've tried so many diets and nothing worked. This is the first time I'm seeing real results. Down 18 pounds in 3 weeks! 🎉",
    likes: 312,
    replies: [],
  },
  {
    usuario: "Lisa Anderson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    tempo: "5 days ago",
    texto: "My doctor recommended this video to me. Best advice I've ever received!",
    likes: 278,
    replies: [],
  },
  {
    usuario: "David Martinez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    tempo: "6 days ago",
    texto: "The science behind this makes so much sense. Thank you Dr. Thompson for explaining it so clearly!",
    likes: 201,
    replies: [],
  },
  {
    usuario: "Jennifer Lee",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer",
    tempo: "1 week ago",
    texto:
      "I've been following your channel for years and this is by far your best video! Life-changing information! ❤️",
    likes: 445,
    replies: [],
  },
  {
    usuario: "Robert Taylor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
    tempo: "1 week ago",
    texto: "Lost 25 pounds in just one month! My wife can't believe the transformation. Thank you so much!",
    likes: 389,
    replies: [],
  },
  {
    usuario: "Amanda White",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda",
    tempo: "1 week ago",
    texto: "This should have millions of views! Everyone needs to see this. Sharing with all my friends and family!",
    likes: 167,
    replies: [],
  },
  {
    usuario: "Christopher Brown",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Christopher",
    tempo: "1 week ago",
    texto:
      "I'm a nutritionist and I approve this message! Dr. Thompson knows what she's talking about. Excellent advice! 👏",
    likes: 523,
    replies: [],
  },
  {
    usuario: "Michelle Davis",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michelle",
    tempo: "2 weeks ago",
    texto: "Started this yesterday and already feeling more energetic! Can't wait to see the results in 2 weeks!",
    likes: 198,
    replies: [],
  },
]

// Componente principal da página
export default function YouTubePage() {
  // Estado para expandir/contrair descrição do vídeo
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  // Estado para expandir/contrair respostas dos comentários
  const [expandedReplies, setExpandedReplies] = useState<number[]>([])

  // Função para alternar exibição das respostas
  const toggleReplies = (index: number) => {
    setExpandedReplies((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    // Container principal da página
    <div className="min-h-screen bg-white">
      {/* Cabeçalho estilo YouTube */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-14">
        <div className="flex items-center justify-between h-full px-4">
          {/* Seção esquerda do header */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold tracking-tight text-gray-900">SALTBURN</span>
            </div>
          </div>

          {/* Seção central - busca */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="flex items-center">
              <div className="flex-1 flex items-center border border-gray-300 rounded-l-full h-10 px-4 focus-within:border-blue-500">
                <input type="text" placeholder="Search" className="flex-1 outline-none text-sm" />
              </div>
              <Button className="h-10 px-6 rounded-r-full rounded-l-none bg-gray-50 hover:bg-gray-100 border border-l-0 border-gray-300">
                <Search className="h-5 w-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="ml-2 hover:bg-gray-100 rounded-full">
                <Mic className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Seção direita do header */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
              <Grid3x3 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
              <BellIcon className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <div className="pt-14">
        <div className="max-w-[1754px] mx-auto flex gap-6 p-6">
          {/* Seção do vídeo */}
          <div className="flex-1 max-w-[1280px]">
            {/* Player do vídeo */}
            <div className="w-full bg-black rounded-xl overflow-hidden relative" style={{ aspectRatio: "16/9" }}>
              <img
                src="/before-and-after-weight-loss-transformation-showin.jpg"
                alt="Weight loss transformation thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                id="vid_6706cb8f4d8852000be1abc0"
                style={{ position: "relative", width: "100%", padding: "56.25% 0 0" }}
                dangerouslySetInnerHTML={{
                  __html: `
                    <img 
                      id="thumb_6706cb8f4d8852000be1abc0" 
                      src="https://images.converteai.net/ed9b3b39-9391-4d8c-a4c9-98c3c0b84527/players/6706cb8f4d8852000be1abc0/thumbnail.jpg" 
                      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" 
                      alt="thumbnail"
                    />
                    <div 
                      id="backdrop_6706cb8f4d8852000be1abc0" 
                      style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"
                    ></div>
                    <script type="text/javascript" id="scr_6706cb8f4d8852000be1abc0">
                      var s=document.createElement("script");
                      s.src="https://scripts.converteai.net/ed9b3b39-9391-4d8c-a4c9-98c3c0b84527/players/6706cb8f4d8852000be1abc0/player.js";
                      s.async=true;
                      document.head.appendChild(s);
                    </script>
                  `,
                }}
              />
            </div>

            {/* Informações do vídeo */}
            <div className="mt-3">
              <h1 className="text-xl font-semibold text-gray-900 mb-2">
                THIS 4 INGREDIENTS WILL MAKE YOU LOSE 39LBS IN JUST 14 DAYS
              </h1>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Martha" />
                    <AvatarFallback>DM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">Dr. Martha Thompson</div>
                    <div className="text-xs text-gray-600">2.3M subscribers</div>
                  </div>
                  <Button className="ml-4 bg-black hover:bg-gray-800 text-white rounded-full px-4 h-9">
                    Subscribe
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                    <Bell className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-gray-100 rounded-full">
                    <Button variant="ghost" className="rounded-l-full hover:bg-gray-200 gap-2 h-9">
                      <ThumbsUp className="h-5 w-5" />
                      <span className="font-semibold">89K</span>
                    </Button>
                    <Separator orientation="vertical" className="h-6 bg-gray-300" />
                    <Button variant="ghost" className="rounded-r-full hover:bg-gray-200 h-9">
                      <ThumbsDown className="h-5 w-5" />
                    </Button>
                  </div>
                  <Button variant="ghost" className="bg-gray-100 hover:bg-gray-200 rounded-full gap-2 h-9 px-4">
                    <Share className="h-5 w-5" />
                    <span className="font-semibold">Share</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="bg-gray-100 hover:bg-gray-200 rounded-full h-9 w-9">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Descrição do vídeo */}
              <div className="mt-3 bg-gray-100 rounded-xl p-3">
                <div className="flex items-center gap-2 text-sm font-semibold mb-1">
                  <span>1.5M views</span>
                  <span>•</span>
                  <span>2 days ago</span>
                </div>
                <div className={`text-sm ${isDescriptionExpanded ? "" : "line-clamp-2"}`}>
                  Discover the revolutionary 4-ingredient formula that has helped thousands lose weight naturally and
                  safely. In this video, I'll share the exact combination that can help you lose up to 39 pounds in just
                  14 days.
                  {isDescriptionExpanded && (
                    <>
                      <br />
                      <br />🔬 Scientifically proven ingredients
                      <br />✅ No side effects
                      <br />💪 Boosts metabolism naturally
                      <br />🎯 Targets stubborn fat
                      <br />
                      <br />
                      These ingredients work synergistically to:
                      <br />• Increase your metabolic rate
                      <br />• Suppress appetite naturally
                      <br />• Burn fat while you sleep
                      <br />• Improve energy levels
                      <br />
                      <br />
                      ⚠️ IMPORTANT: Always consult with your healthcare provider before starting any new dietary regimen.
                      <br />
                      <br />📧 For more health tips, subscribe to my channel!
                      <br />🔔 Turn on notifications to never miss a video!
                    </>
                  )}
                </div>
                <Button
                  variant="ghost"
                  className="mt-1 p-0 h-auto font-semibold text-sm hover:bg-transparent"
                  onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                >
                  {isDescriptionExpanded ? "Show less" : "Show more"}
                </Button>
              </div>

              {/* Seção de comentários */}
              <div className="mt-6">
                <div className="flex items-center gap-8 mb-6">
                  <h2 className="text-xl font-semibold">{comments.length} Comments</h2>
                  <Button variant="ghost" className="gap-2 hover:bg-transparent p-0">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M3 7h18M3 12h18M3 17h18" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="font-semibold">Sort by</span>
                  </Button>
                </div>

                {/* Input para novo comentário */}
                <div className="flex gap-4 mb-6">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="w-full border-b border-gray-300 pb-1 outline-none focus:border-b-2 focus:border-black"
                    />
                  </div>
                </div>

                {/* Lista de comentários */}
                <div className="space-y-4">
                  {comments.map((comment, index) => (
                    <div key={index} className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {comment.usuario
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm">
                            @{comment.usuario.toLowerCase().replace(" ", "")}
                          </span>
                          <span className="text-xs text-gray-600">{comment.tempo}</span>
                        </div>
                        <p className="text-sm mb-2">{comment.texto}</p>
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="h-8 gap-2 hover:bg-gray-100 rounded-full px-2">
                            <ThumbsUp className="h-4 w-4" />
                            <span className="text-xs">{comment.likes}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 hover:bg-gray-100 rounded-full px-2">
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 hover:bg-transparent px-2 font-semibold text-xs"
                          >
                            Reply
                          </Button>
                        </div>

                        {/* Respostas dos comentários */}
                        {comment.replies && comment.replies.length > 0 && (
                          <div className="mt-3">
                            <Button
                              variant="ghost"
                              className="text-blue-600 hover:bg-blue-50 rounded-full gap-2 h-8 px-3 mb-3"
                              onClick={() => toggleReplies(index)}
                            >
                              {expandedReplies.includes(index) ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                              <span className="font-semibold text-sm">
                                {comment.replies.length} {comment.replies.length === 1 ? "reply" : "replies"}
                              </span>
                            </Button>

                            {expandedReplies.includes(index) && (
                              <div className="space-y-3">
                                {comment.replies.map((reply, replyIndex) => (
                                  <div key={replyIndex} className="flex gap-3">
                                    <Avatar className="h-8 w-8">
                                      <AvatarImage src={reply.avatar || "/placeholder.svg"} />
                                      <AvatarFallback>
                                        {reply.usuario
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="font-semibold text-sm">
                                          @{reply.usuario.toLowerCase().replace(" ", "")}
                                        </span>
                                        <span className="text-xs text-gray-600">{reply.tempo}</span>
                                      </div>
                                      <p className="text-sm mb-2">{reply.texto}</p>
                                      <div className="flex items-center gap-4">
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="h-8 gap-2 hover:bg-gray-100 rounded-full px-2"
                                        >
                                          <ThumbsUp className="h-4 w-4" />
                                          <span className="text-xs">{reply.likes}</span>
                                        </Button>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="h-8 hover:bg-gray-100 rounded-full px-2"
                                        >
                                          <ThumbsDown className="h-4 w-4" />
                                        </Button>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="h-8 hover:bg-transparent px-2 font-semibold text-xs"
                                        >
                                          Reply
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Seção dos cards de preços */}
                <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 py-16 px-4 flex items-center justify-center">
                  <div className="max-w-7xl mx-auto w-full">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
                      Let's Get Fit!
                    </h1>
                    <p className="text-center text-muted-foreground mb-12 text-lg">
                      Select your Package
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
                      {/* Card: Try One */}
                      <PricingCard
                        title="Try One"
                        subtitle="30 Days, 1 Bottles"
                        price={89}
                        originalPrice={157}
                        savings={68}
                        image="/saltburn1.png"
                        imageStyle={{ width: 140, height: 200 }}
                      />

                      {/* Card: Best Value */}
                      <PricingCard
                        title="Best Value"
                        subtitle="180 Days, 6 Bottles"
                        price={49}
                        originalPrice={294}
                        savings={245}
                        image="/saltburn6.png"
                        imageStyle={{ width: 200, height: 300 }}
                        isRecommended={true}
                        features={[
                          "THE TREATMENT RECOMMENDED FOR YOU BY THE DOCTOR",
                          "60-DAYS GUARANTEE"
                        ]}
                      />

                      {/* Card: Good Value */}
                      <PricingCard
                        title="Good Value"
                        subtitle="90 Days, 3 Bottles"
                        price={59}
                        originalPrice={177}
                        savings={118}
                        image="/saltburn3.png"
                        imageStyle={{ width: 200, height: 300 }}
                      />
                    </div>
                    <div className="mt-12 text-center">
                      <p className="text-muted-foreground text-sm">
                        All packages come with a 60-day money-back guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>  
)}
