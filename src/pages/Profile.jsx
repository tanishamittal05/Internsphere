import React, { useState, useEffect } from "react";
import { Button } from "../../frontend/src/components/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "../../frontend/src/components/Card";
import { Input } from "../../frontend/src/components/Input";
import { Label } from "../../frontend/src/components/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../frontend/src/components/Select";
import { Badge } from "../../frontend/src/components/Badge";
import { X, User as UserIcon, BookOpen, Wrench, MapPin, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SKILL_SUGGESTIONS = ["Data Analysis", "Marketing", "Content Writing", "Graphic Design", "Video Editing", "Social Media", "Sales"];
const INTEREST_SUGGESTIONS = ["Healthcare", "Education", "Technology", "Environment", "Finance", "E-commerce", "Media"];

export default function ProfilePage() {
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSkill, setCurrentSkill] = useState("");
  const [currentInterest, setCurrentInterest] = useState("");

  // ✅ Mock: simulate fetching profile
  useEffect(() => {
    setTimeout(() => {
      setStudent({
        id: 1,
        full_name: "Tanisha Mittal",
        email: "tanisha@example.com",
        education_level: "Undergraduate",
        field_of_study: "Computer Science",
        skills: ["React", "Java"],
        sector_interests: ["Technology", "E-commerce"],
        location_preference: "Delhi",
        regional_language: "Hindi",
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleInputChange = (field, value) => {
    setStudent(prev => ({ ...prev, [field]: value }));
  };

  const handleAddTag = (type, value) => {
    if (value && !student[type].includes(value)) {
      setStudent(prev => ({ ...prev, [type]: [...prev[type], value] }));
    }
    if (type === "skills") setCurrentSkill("");
    if (type === "sector_interests") setCurrentInterest("");
  };

  const handleRemoveTag = (type, tagToRemove) => {
    setStudent(prev => ({
      ...prev,
      [type]: prev[type].filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log("Profile saved ✅", student);
      navigate("/dashboard"); // simple redirect
    }, 1200);
  };

  if (isLoading || !student) {
    return <div className="p-8 text-slate-600">Loading your profile...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit}>
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-slate-800">
                <UserIcon className="w-6 h-6" />
                Your Profile
              </CardTitle>
              <CardDescription>
                Complete your profile to get the best internship recommendations.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8 pt-6">
              {/* Academic Background */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 font-semibold text-slate-700">
                  <BookOpen className="w-5 h-5 text-blue-500" /> Academic Background
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Highest Education</Label>
                    <Select
                      value={student.education_level || ""}
                      onValueChange={(value) => handleInputChange("education_level", value)}
                    >
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="High School">High School</SelectItem>
                        <SelectItem value="Diploma">Diploma</SelectItem>
                        <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                        <SelectItem value="Postgraduate">Postgraduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Field of Study</Label>
                    <Input
                      value={student.field_of_study || ""}
                      onChange={(e) => handleInputChange("field_of_study", e.target.value)}
                      placeholder="e.g., Computer Science"
                    />
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 font-semibold text-slate-700">
                  <Wrench className="w-5 h-5 text-purple-500" /> Your Skills
                </h3>
                <div className="flex gap-2">
                  <Input
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                    placeholder="Type a skill and press Enter"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddTag("skills", currentSkill);
                      }
                    }}
                  />
                  <Button type="button" onClick={() => handleAddTag("skills", currentSkill)}>Add</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {student.skills.map(skill => (
                    <Badge key={skill} className="flex items-center gap-1">
                      {skill}
                      <button type="button" onClick={() => handleRemoveTag("skills", skill)}>
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-slate-500">Suggestions:</p>
                <div className="flex flex-wrap gap-2">
                  {SKILL_SUGGESTIONS.map(s => (
                    <Button key={s} type="button" size="sm" variant="outline" onClick={() => handleAddTag("skills", s)}>{s}</Button>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 font-semibold text-slate-700">
                  <Lightbulb className="w-5 h-5 text-yellow-500" /> Sector Interests
                </h3>
                <div className="flex gap-2">
                  <Input
                    value={currentInterest}
                    onChange={(e) => setCurrentInterest(e.target.value)}
                    placeholder="Type an interest and press Enter"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddTag("sector_interests", currentInterest);
                      }
                    }}
                  />
                  <Button type="button" onClick={() => handleAddTag("sector_interests", currentInterest)}>Add</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {student.sector_interests.map(interest => (
                    <Badge key={interest} variant="secondary" className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                      {interest}
                      <button type="button" onClick={() => handleRemoveTag("sector_interests", interest)}>
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-slate-500">Suggestions:</p>
                <div className="flex flex-wrap gap-2">
                  {INTEREST_SUGGESTIONS.map(i => (
                    <Button key={i} type="button" size="sm" variant="outline" onClick={() => handleAddTag("sector_interests", i)}>{i}</Button>
                  ))}
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 font-semibold text-slate-700">
                  <MapPin className="w-5 h-5 text-green-500" /> Location & Language
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Preferred Location</Label>
                    <Input
                      value={student.location_preference || ""}
                      onChange={(e) => handleInputChange("location_preference", e.target.value)}
                      placeholder="e.g., Delhi or 'Any'"
                    />
                  </div>
                  <div>
                    <Label>Primary Language</Label>
                    <Input
                      value={student.regional_language || ""}
                      onChange={(e) => handleInputChange("regional_language", e.target.value)}
                      placeholder="e.g., Hindi, Tamil"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-end pt-4">
                <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save and Get Recommendations"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}

