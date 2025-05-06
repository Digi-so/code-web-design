
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileAvatarProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const ProfileAvatar = ({ className, size = "md" }: ProfileAvatarProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-16 w-16",
    xl: "h-24 w-24"
  };

  return (
    <Avatar className={`${sizeClasses[size]} ${className || ""}`}>
      <AvatarImage src="./lovable-uploads/53d62265-fa15-4f27-804f-98fb8f5a5d4a.png" alt="Profile" />
      <AvatarFallback>JM</AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
