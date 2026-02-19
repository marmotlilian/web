import Link from "next/link";
import { Github, Twitter, Mail, Linkedin } from "lucide-react";

interface AuthorProps {
  name: string;
  bio: string;
  avatar?: string;
  socials?: {
    github?: string;
    twitter?: string;
    email?: string;
    linkedin?: string;
  };
}

export default function Author({ name, bio, avatar, socials = {} }: AuthorProps) {
  return (
    <section id="about" className="py-12 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Avatar */}
          <div className="flex-shrink-0">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="w-20 h-20 rounded-full object-cover border-2 border-border"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-2xl font-serif">
                {name.charAt(0)}
              </div>
            )}
          </div>

          {/* Bio */}
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-xl font-serif font-medium mb-2">{name}</h2>
              <p className="text-muted-foreground leading-relaxed">{bio}</p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socials.github && (
                <Link
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              )}
              {socials.twitter && (
                <Link
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              )}
              {socials.linkedin && (
                <Link
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              )}
              {socials.email && (
                <Link
                  href={`mailto:${socials.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
